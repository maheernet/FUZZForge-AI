import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldAlert, AlertTriangle, AlertCircle, ChevronRight } from "lucide-react";

export default function Findings() {
  const findings = [
    {
      id: "FZ-1042",
      type: "Heap Buffer Overflow",
      severity: "Critical",
      confidence: "97%",
      target: "process_input()",
      file: "parser.c",
      line: 142,
      icon: ShieldAlert,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/30"
    },
    {
      id: "FZ-1041",
      type: "Use-After-Free",
      severity: "Critical",
      confidence: "94%",
      target: "destroy_context()",
      file: "context.c",
      line: 88,
      icon: ShieldAlert,
      color: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/30"
    },
    {
      id: "FZ-1038",
      type: "Integer Overflow",
      severity: "Medium",
      confidence: "87%",
      target: "parse_packet()",
      file: "parser.c",
      line: 65,
      icon: AlertTriangle,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Security Findings</h1>
          <p className="text-gray-400 mt-1">Vulnerabilities detected during fuzzing campaigns.</p>
        </div>
      </div>

      <div className="grid gap-4">
        {findings.map((finding) => (
          <Link key={finding.id} to={`/findings/${finding.id}`}>
            <Card className={`hover:bg-white/5 transition-colors cursor-pointer border ${finding.border} ${finding.bg}`}>
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className={`p-3 rounded-full ${finding.bg} ${finding.color}`}>
                    <finding.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <span className="font-mono text-sm text-gray-400">{finding.id}</span>
                      <h3 className="text-lg font-bold text-white">{finding.type}</h3>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded uppercase ${finding.color} bg-black/40 border ${finding.border}`}>
                        {finding.severity}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 space-x-4">
                      <span>Target: <code className="text-cyan-400 font-mono">{finding.target}</code></span>
                      <span>Location: <span className="text-white font-mono">{finding.file}:{finding.line}</span></span>
                      <span>Confidence: {finding.confidence}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gray-500" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
