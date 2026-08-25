import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Pause, Square, RotateCcw, AlertTriangle, ShieldAlert } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '0s', cov: 10, paths: 50 },
  { time: '10s', cov: 25, paths: 200 },
  { time: '20s', cov: 40, paths: 500 },
  { time: '30s', cov: 55, paths: 900 },
  { time: '40s', cov: 65, paths: 1200 },
  { time: '50s', cov: 67, paths: 1350 },
  { time: '60s', cov: 67.4, paths: 1402 },
];

export default function FuzzingConsole() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center">
            Fuzzing Campaign
            <span className="ml-4 px-3 py-1 bg-green-900/30 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full border border-green-500/30 flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
              Running
            </span>
          </h1>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="glass"><Pause className="w-4 h-4 mr-2" /> Pause</Button>
          <Button variant="outline" className="glass text-red-400 hover:text-red-300 hover:bg-red-950/30"><Square className="w-4 h-4 mr-2" /> Stop</Button>
          <Button variant="outline" className="glass"><RotateCcw className="w-4 h-4 mr-2" /> Restart</Button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: "Executions/sec", value: "25.4K" },
          { label: "Total Executions", value: "8.7M" },
          { label: "Coverage", value: "67.4%" },
          { label: "New Paths", value: "1,402" },
          { label: "Corpus Size", value: "4,892" },
          { label: "Crashes", value: "3", alert: true },
        ].map((stat, i) => (
          <Card key={i} className={stat.alert ? "border-pink-500/50 shadow-[0_0_15px_rgba(236,72,153,0.15)] bg-pink-950/10" : "bg-[#0a1128]"}>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className={`text-2xl font-bold font-mono ${stat.alert ? 'text-pink-500' : 'text-cyan-400'}`}>
                {stat.value}
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider font-medium mt-1">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 min-h-[300px]">
        <Card className="bg-[#0a1128]">
          <div className="p-4 border-b border-white/10">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Coverage & Paths Discovery</h3>
          </div>
          <CardContent className="p-4 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCov" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.2)" fontSize={12} tickMargin={10} />
                <YAxis stroke="rgba(255,255,255,0.2)" fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: '#050814', borderColor: 'rgba(255,255,255,0.1)' }} />
                <Area type="monotone" dataKey="cov" stroke="#00f0ff" strokeWidth={2} fillOpacity={1} fill="url(#colorCov)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-[#0a1128] flex flex-col">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <h3 className="font-bold text-white text-sm uppercase tracking-wider">Live Terminal Logs</h3>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs text-gray-400 font-mono">Live</span>
            </div>
          </div>
          <CardContent className="p-4 flex-1 bg-[#050814] font-mono text-xs overflow-y-auto space-y-1.5 h-[250px]">
            <div className="text-gray-400">[+] Fuzzing started</div>
            <div className="text-gray-400">[+] Target: process_input</div>
            <div className="text-gray-400">[+] Engine: libFuzzer</div>
            <div className="text-gray-400">...</div>
            <div className="text-cyan-400">#12543 NEW path discovered (cov: 67.4%)</div>
            <div className="text-cyan-400">#12544 corpus expanded (size: 4892)</div>
            <div className="text-gray-500">#12545 mutation generated</div>
            <div className="text-pink-400 mt-4">=================================================================</div>
            <div className="text-pink-500 font-bold bg-pink-950/50 p-2 border-l-4 border-pink-500 rounded-r">
              <div className="flex items-center"><ShieldAlert className="w-4 h-4 mr-2" /> !!! CRASH DETECTED !!!</div>
              <div>Signal: SIGSEGV (AddressSanitizer: heap-buffer-overflow)</div>
              <div>Address: 0x0000000000000008</div>
              <div className="mt-2 text-white/80 font-normal">
                <Link to="/findings/FZ-1042" className="underline hover:text-white">View Details &rarr;</Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
