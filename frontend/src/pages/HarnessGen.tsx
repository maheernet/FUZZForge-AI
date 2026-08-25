import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Copy, Download, RefreshCw, CheckCircle2, Bot } from "lucide-react";
import Editor from "@monaco-editor/react";

const generatedCode = `#include <stdint.h>
#include <stddef.h>
#include <fuzzer/FuzzedDataProvider.h>
#include "libSecureParser.h"

extern "C" int LLVMFuzzerTestOneInput(const uint8_t *data, size_t size) {
    FuzzedDataProvider fdp(data, size);

    // 1. Valid parameter setup
    size_t input_size = fdp.ConsumeIntegralInRange<size_t>(0, 1024);
    std::vector<uint8_t> buffer = fdp.ConsumeBytes<uint8_t>(input_size);

    // 2. Context initialization
    Context* ctx = create_context();
    if (!ctx) return 0;
    
    initialize_buffer(ctx, buffer.size());

    // 3. Structured API execution
    if (buffer.size() > 0) {
        process_input(ctx, buffer.data(), buffer.size());
    }

    // 4. Resource teardown
    destroy_context(ctx);

    return 0;
}`;

export default function HarnessGen() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">AI Harness Generator</h1>
          <p className="text-gray-400 mt-1">Target: <code className="text-cyan-400 bg-cyan-950/30 px-2 py-0.5 rounded font-mono">process_input(Context* ctx, const uint8_t* data, size_t size)</code></p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="glass"><RefreshCw className="w-4 h-4 mr-2" /> Regenerate</Button>
          <Button asChild><Link to="/fuzzing"><Play className="w-4 h-4 mr-2" /> Launch Fuzzing</Link></Button>
        </div>
      </div>

      <div className="flex-1 grid lg:grid-cols-4 gap-6 h-full min-h-[600px]">
        
        {/* Editor Area */}
        <Card className="lg:col-span-3 flex flex-col overflow-hidden bg-[#0a1128]">
          <div className="flex justify-between items-center p-3 border-b border-white/10 bg-[#050814]">
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-cyan-900/40 text-cyan-400 text-xs font-mono rounded border border-cyan-500/30">harness.cpp</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs"><Copy className="w-3 h-3 mr-1" /> Copy</Button>
              <Button variant="ghost" size="sm" className="h-7 text-xs"><Download className="w-3 h-3 mr-1" /> Download</Button>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <Editor
              height="100%"
              defaultLanguage="cpp"
              theme="vs-dark"
              value={generatedCode}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                scrollBeyondLastLine: false,
                padding: { top: 16 },
              }}
            />
          </div>
        </Card>

        {/* AI Components Panel */}
        <Card className="lg:col-span-1 flex flex-col">
          <div className="p-4 border-b border-white/10 bg-[#050814]">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white">Generated Components</h3>
              <div className="flex items-center text-xs font-bold px-2 py-1 bg-purple-900/30 text-purple-400 rounded-full border border-purple-500/30">
                <Bot className="w-3 h-3 mr-1" /> 94% Confidence
              </div>
            </div>
          </div>
          <CardContent className="p-6 space-y-4">
            {[
              "FuzzedDataProvider slicing",
              "Valid parameter setup",
              "Context initialization",
              "Structured API execution",
              "Resource teardown",
              "libFuzzer compatibility"
            ].map((item, i) => (
              <div key={i} className="flex items-center text-sm">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-sm font-bold text-white mb-2">Build Command</h4>
              <div className="bg-[#050814] p-3 rounded border border-white/10 font-mono text-xs text-gray-400 break-all">
                clang++ -g -O1 -fsanitize=fuzzer,address harness.cpp -o fuzzer
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
