import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, CircleDashed, Terminal, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const STAGES = [
  "Header Input",
  "Clang AST",
  "API Extraction",
  "Struct Analysis",
  "Dependency Map",
  "ML Ranking",
  "Auto Harness",
  "libFuzzer",
  "Coverage Loop"
];

export default function Analyze() {
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(s => (s < STAGES.length ? s + 1 : s));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Analyzing libSecureParser</h1>
          <p className="text-gray-400 mt-1">Extracting API signatures and mapping dependencies...</p>
        </div>
        {activeStage >= 5 && (
          <Button asChild className="animate-in fade-in zoom-in">
             <Link to="/graph">View Dependency Graph <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {STAGES.map((stage, i) => {
            const isCompleted = i < activeStage;
            const isActive = i === activeStage;
            const isPending = i > activeStage;

            return (
              <div key={i} className={`flex items-center p-4 rounded-lg border ${isActive ? 'bg-cyan-950/30 border-cyan-500/50 glow-border' : 'border-transparent bg-white/5'} transition-all`}>
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6 text-green-500 mr-4" />
                ) : isActive ? (
                  <CircleDashed className="w-6 h-6 text-cyan-400 mr-4 animate-spin" />
                ) : (
                  <CircleDashed className="w-6 h-6 text-gray-600 mr-4" />
                )}
                <div>
                  <div className={`font-medium ${isActive ? 'text-cyan-400' : isCompleted ? 'text-white' : 'text-gray-500'}`}>
                    0{i + 1} {stage}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full flex flex-col">
            <div className="p-4 border-b border-white/10 flex items-center bg-[#050814]">
              <Terminal className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400 font-mono">analysis_pipeline.log</span>
            </div>
            <CardContent className="p-0 flex-1 bg-[#050814] relative">
              <div className="absolute inset-0 p-6 overflow-y-auto font-mono text-sm space-y-2">
                {activeStage >= 0 && <div className="text-gray-400">[12:43:21] Loading repository libSecureParser...</div>}
                {activeStage >= 1 && <div className="text-gray-400">[12:43:22] Parsing C++ headers...</div>}
                {activeStage >= 2 && <div className="text-green-400">[12:43:23] Successfully built Clang AST.</div>}
                {activeStage >= 3 && <div className="text-gray-400">[12:43:24] Extracting API signatures (found 142 functions)...</div>}
                {activeStage >= 4 && <div className="text-gray-400">[12:43:25] Analyzing data structures and allocations...</div>}
                {activeStage >= 5 && <div className="text-cyan-400 glow-text">[12:43:26] Constructing dependency graph...</div>}
                {activeStage >= 6 && <div className="text-gray-400">[12:43:28] Running ML models for fuzzability ranking...</div>}
                
                {activeStage < STAGES.length && (
                  <div className="flex items-center text-cyan-400 mt-4">
                    <span className="mr-2">Processing</span>
                    <span className="flex space-x-1">
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}>.</motion.span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 1 }}>.</motion.span>
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
