import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";
import { ShieldAlert, ArrowLeft, Copy, Download, Play, Terminal } from "lucide-react";
import Editor from "@monaco-editor/react";

const sourceCode = `void process_input(Context* ctx, const uint8_t* data, size_t size) {
    if (size < 4) return;
    
    // Parse header
    uint32_t header_length = *(uint32_t*)data;
    
    // Vulnerable code: Trusting input length without bounds checking against size
    if (header_length > 0) {
        ctx->buffer = (uint8_t*)malloc(header_length);
        
        // HEAP BUFFER OVERFLOW triggers here if header_length > size
        memcpy(ctx->buffer, data + 4, header_length); 
    }
}`;

export default function CrashDetail() {
  const { id } = useParams();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/findings"><ArrowLeft className="w-5 h-5" /></Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center">
            Crash #{id || 'FZ-1042'}
          </h1>
        </div>
        <div className="ml-auto flex space-x-3">
          <Button variant="outline" className="glass"><Copy className="w-4 h-4 mr-2" /> Copy Input</Button>
          <Button variant="outline" className="glass"><Download className="w-4 h-4 mr-2" /> Reproducer</Button>
          <Button><Play className="w-4 h-4 mr-2" /> Replay Crash</Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-3 border-pink-500/30 bg-pink-950/10 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
          <CardContent className="p-6">
            <div className="flex items-center space-x-6">
              <ShieldAlert className="w-12 h-12 text-pink-500" />
              <div className="grid grid-cols-4 gap-8 flex-1">
                <div>
                  <div className="text-sm text-gray-400 mb-1">Severity</div>
                  <div className="font-bold text-pink-500 text-lg uppercase">Critical</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Type</div>
                  <div className="font-bold text-white text-lg">Heap Buffer Overflow</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Sanitizer</div>
                  <div className="font-bold text-white text-lg">AddressSanitizer</div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Target</div>
                  <div className="font-bold text-white text-lg font-mono">process_input()</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 flex flex-col bg-[#0a1128]">
          <CardHeader className="p-4 border-b border-white/10 flex flex-row items-center justify-between">
            <CardTitle className="text-white text-sm">Source Location</CardTitle>
            <span className="text-gray-400 text-xs font-mono">parser.c:142</span>
          </CardHeader>
          <div className="flex-1 h-[400px]">
            <Editor
              height="100%"
              defaultLanguage="cpp"
              theme="vs-dark"
              value={sourceCode}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', monospace",
                lineDecorationsWidth: 5,
                lineNumbersMinChars: 3,
              }}
            />
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="bg-[#0a1128]">
            <CardHeader className="p-4 border-b border-white/10">
              <CardTitle className="text-white text-sm flex items-center"><Terminal className="w-4 h-4 mr-2" /> Stack Trace</CardTitle>
            </CardHeader>
            <CardContent className="p-4 font-mono text-xs overflow-x-auto text-gray-300 space-y-1">
              <div className="text-pink-400">==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address 0x602000000014</div>
              <div>READ of size 4096 at 0x602000000014 thread T0</div>
              <div className="pl-4">#0 0x48a04b in memcpy</div>
              <div className="pl-4 font-bold text-white">#1 0x51c23a in process_input parser.c:142:9</div>
              <div className="pl-4">#2 0x51b782 in LLVMFuzzerTestOneInput harness.cpp:21:9</div>
              <div className="pl-4">#3 0x43e591 in fuzzer::Fuzzer::ExecuteCallback(unsigned const*, unsigned long)</div>
            </CardContent>
          </Card>

          <Card className="bg-[#0a1128]">
            <CardHeader className="p-4 border-b border-white/10">
              <CardTitle className="text-white text-sm">Root Cause Analysis</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-sm text-gray-300">
              <p>The application reads <code className="text-cyan-400 bg-cyan-950/30 px-1 rounded">header_length</code> from unvalidated input and passes it to <code className="text-cyan-400 bg-cyan-950/30 px-1 rounded">memcpy()</code>. If <code className="text-cyan-400 bg-cyan-950/30 px-1 rounded">header_length</code> exceeds the actual <code className="text-cyan-400 bg-cyan-950/30 px-1 rounded">size</code> of the provided <code className="text-cyan-400 bg-cyan-950/30 px-1 rounded">data</code>, a heap buffer over-read occurs.</p>
              
              <div className="mt-4 pt-4 border-t border-white/10">
                <h4 className="font-bold text-white mb-2">Suggested Fix</h4>
                <div className="font-mono text-xs bg-black/40 p-3 rounded border border-green-500/30 text-gray-300">
                  <div className="text-red-400">- if (header_length &gt; 0) {'{'}</div>
                  <div className="text-green-400">+ if (header_length &gt; 0 && header_length &lt;= size - 4) {'{'}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
