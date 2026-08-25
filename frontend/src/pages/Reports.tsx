import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

export default function Reports() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white tracking-tight">Security Assessment Report</h1>
        <div className="flex space-x-3">
          <Button variant="outline" className="glass"><Download className="w-4 h-4 mr-2" /> PDF</Button>
          <Button variant="outline" className="glass"><Download className="w-4 h-4 mr-2" /> JSON</Button>
          <Button><Share2 className="w-4 h-4 mr-2" /> Share</Button>
        </div>
      </div>

      <Card className="bg-[#0a1128] border-white/10 shadow-2xl">
        <CardContent className="p-12 space-y-12">
          
          <div className="text-center space-y-4 border-b border-white/10 pb-12">
            <h2 className="text-4xl font-bold text-white tracking-wider">FuzzForge <span className="text-cyan-400">AI</span></h2>
            <div className="text-xl text-gray-400">Automated Security Assessment</div>
            <div className="text-sm font-mono text-gray-500">Target: libSecureParser | Date: Oct 24, 2026</div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-900/50 pb-2">Executive Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-4">
              <div>
                <div className="text-sm text-gray-400">Analysis Duration</div>
                <div className="text-xl font-bold text-white font-mono">32m</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Harnesses</div>
                <div className="text-xl font-bold text-white font-mono">18</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Executions</div>
                <div className="text-xl font-bold text-white font-mono">48.2M</div>
              </div>
              <div>
                <div className="text-sm text-gray-400">Total Coverage</div>
                <div className="text-xl font-bold text-cyan-400 font-mono">78%</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-pink-950/20 border border-pink-500/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-pink-500 mb-1">2</div>
                <div className="text-xs uppercase tracking-wider text-pink-500/70 font-bold">Critical</div>
              </div>
              <div className="bg-orange-950/20 border border-orange-500/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">4</div>
                <div className="text-xs uppercase tracking-wider text-orange-500/70 font-bold">High</div>
              </div>
              <div className="bg-yellow-950/20 border border-yellow-500/30 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-1">7</div>
                <div className="text-xs uppercase tracking-wider text-yellow-500/70 font-bold">Medium</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-widest border-b border-cyan-900/50 pb-2">Vulnerability Summary</h3>
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                <span className="text-white font-bold">Heap Buffer Overflow in process_input</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-500 text-xs font-bold rounded">CRITICAL</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/5 rounded">
                <span className="text-white font-bold">Use-After-Free in destroy_context</span>
                <span className="px-2 py-1 bg-pink-500/20 text-pink-500 text-xs font-bold rounded">CRITICAL</span>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>
    </div>
  )
}
