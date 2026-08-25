import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, AlertTriangle, PlayCircle } from "lucide-react";
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useState } from "react";

const initialNodes = [
  { id: '1', position: { x: 250, y: 50 }, data: { label: 'create_context()' }, className: 'bg-[#0a1128] text-white border-cyan-500 rounded-md p-2' },
  { id: '2', position: { x: 250, y: 150 }, data: { label: 'initialize_buffer()' }, className: 'bg-[#0a1128] text-white border-gray-600 rounded-md p-2' },
  { id: '3', position: { x: 250, y: 250 }, data: { label: 'process_input()' }, className: 'bg-[#0a1128] text-cyan-400 font-bold border-cyan-400 glow-border rounded-md p-2' },
  { id: '4', position: { x: 100, y: 350 }, data: { label: 'parse_packet()' }, className: 'bg-[#0a1128] text-white border-gray-600 rounded-md p-2' },
  { id: '5', position: { x: 400, y: 350 }, data: { label: 'decode_header()' }, className: 'bg-[#0a1128] text-white border-gray-600 rounded-md p-2' },
  { id: '6', position: { x: 250, y: 450 }, data: { label: 'destroy_context()' }, className: 'bg-[#0a1128] text-white border-gray-600 rounded-md p-2' },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: '#00c3ff' } },
  { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#00c3ff' } },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e3-5', source: '3', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  { id: 'e5-6', source: '5', target: '6' },
];

export default function GraphView() {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dependency Intelligence</h1>
          <p className="text-gray-400 mt-1">Interactive API call graph and dependency visualization.</p>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-6 h-full min-h-[600px]">
        {/* Graph Area */}
        <Card className="col-span-3 overflow-hidden flex flex-col relative bg-[#050814]">
          <div className="absolute inset-0">
            <ReactFlow nodes={nodes} edges={edges} fitView>
              <Background color="#1a2238" gap={16} />
              <Controls className="bg-[#0a1128] border-gray-700 fill-white" />
            </ReactFlow>
          </div>
        </Card>

        {/* AI Target Ranking Panel */}
        <Card className="col-span-1 flex flex-col">
          <div className="p-4 border-b border-white/10 bg-[#0a1128]">
            <h3 className="font-bold text-white flex items-center">
              <Code2 className="w-5 h-5 text-cyan-400 mr-2" /> AI Target Ranking
            </h3>
          </div>
          <CardContent className="p-4 space-y-6 overflow-y-auto">
            <div className="space-y-4">
              {/* Target 1 */}
              <div className="p-4 rounded-lg bg-cyan-950/20 border border-cyan-500/50 glow-border">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-cyan-400 font-mono">#1 process_input()</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Risk Score</span> <span className="text-white font-mono">94</span></div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-pink-500 h-1.5 rounded-full w-[94%]"></div></div>
                  
                  <div className="flex justify-between"><span className="text-gray-400">Fuzzability</span> <span className="text-white font-mono">97</span></div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5"><div className="bg-green-500 h-1.5 rounded-full w-[97%]"></div></div>
                </div>
                <div className="mt-4 p-3 bg-black/40 rounded border border-white/5 text-xs text-gray-300">
                  <span className="text-purple-400 font-bold block mb-1">AI Explanation:</span>
                  High pointer interaction, complex parameter structure, multiple dependent initialization steps, and significant input surface.
                </div>
                <Button className="w-full mt-4 h-8 text-xs" asChild>
                  <Link to="/harness">Generate Harness</Link>
                </Button>
              </div>

              {/* Target 2 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white font-mono">#2 parse_packet()</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Risk Score</span> <span className="text-white font-mono">89</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Fuzzability</span> <span className="text-white font-mono">91</span></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
