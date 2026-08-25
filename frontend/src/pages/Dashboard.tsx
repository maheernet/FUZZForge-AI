import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FolderGit2, ShieldAlert, Zap, Activity, Code2, AlertTriangle, 
  ArrowRight, UploadCloud, Search, Filter, Sparkles, TerminalSquare, Network
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  YAxis
} from "recharts";

const sparklineData = Array.from({ length: 20 }, (_, i) => ({ value: 40 + Math.random() * 60 + (i * 2) }));

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto">
      
      {/* Critical Alert */}
      <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3 flex items-center justify-between shadow-sm shadow-rose-900/10">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-rose-500" />
          <span className="text-sm text-rose-100">
            <span className="font-semibold text-rose-400">2 Critical vulnerabilities require attention:</span> Heap Buffer Overflow, Use-After-Free
          </span>
        </div>
        <Button variant="link" className="text-rose-400 hover:text-rose-300 h-auto p-0 px-2 text-sm font-medium">
          Review Findings &rarr;
        </Button>
      </div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Security Workspace</h1>
          <p className="text-sm text-gray-400 mt-1">Monitor your AI-powered security testing pipeline.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="gap-2">
            <UploadCloud className="w-4 h-4" />
            Upload Repository
          </Button>
          <Button variant="default" className="gap-2">
            <FolderGit2 className="w-4 h-4" />
            + New Analysis
          </Button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4">
        <MetricCard title="TARGETS ANALYZED" value="48" trend="↑ 12.5% this month" icon={FolderGit2} trendUp />
        <MetricCard title="HARNESSES" value="36" trend="↑ 8 generated today" icon={Code2} trendUp />
        <MetricCard title="FUZZING" value="21" trend="3 active campaigns" icon={Zap} trendUp />
        <MetricCard title="VULNERABILITIES" value="7" trend="2 critical require action" icon={ShieldAlert} trendUp={false} alert />
        <MetricCard title="COVERAGE AVG" value="68.2%" trend="↑ 4.1% overall" icon={Activity} trendUp />
        <MetricCard title="NEW PATHS" value="1,402" trend="↑ 18.4% this week" icon={Network} trendUp />
      </div>

      {/* Main Operational Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Security Health */}
        <Card className="elevated-card border-none bg-gradient-to-b from-[#111A30] to-[#0D1426]">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Security Health</h3>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-bold text-white">92%</span>
                <span className="text-sm font-medium text-green-400 mb-1">Excellent</span>
              </div>
              
              <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-cyan-400 w-[92%] h-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              </div>
              
              <div className="pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-gray-300">
                  <span>Projects monitored</span>
                  <span className="font-medium text-white">12</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Total findings</span>
                  <span className="font-medium text-white">7</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Critical severity</span>
                  <span className="font-medium text-rose-400">2</span>
                </div>
              </div>
            </div>
            
            <Button variant="secondary" className="w-full mt-6 bg-[#060914] border-white/5">
              View Findings
            </Button>
          </CardContent>
        </Card>

        {/* Active Fuzzing */}
        <Card className="elevated-card border-none bg-gradient-to-br from-[#111A30] to-[#0D1426] col-span-1 lg:col-span-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Zap className="w-32 h-32 text-cyan-400" />
          </div>
          <CardContent className="p-6 relative z-10 flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_8px_#22D3EE]"></span>
                </div>
                <h3 className="text-xs font-semibold text-gray-400 tracking-widest uppercase">Active Fuzzing</h3>
              </div>
              <span className="text-sm font-mono text-cyan-400 bg-cyan-900/30 px-2 py-0.5 rounded border border-cyan-500/20">
                libSecureParser
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Executions/sec</p>
                <p className="text-2xl font-mono text-white mt-1">25.4K</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Coverage</p>
                <p className="text-2xl font-mono text-white mt-1">72.4%</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">New Paths</p>
                <p className="text-2xl font-mono text-white mt-1">1,402</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-semibold">Runtime</p>
                <p className="text-2xl font-mono text-white mt-1">18m 42s</p>
              </div>
            </div>

            <div className="flex-1 min-h-[60px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={sparklineData}>
                  <YAxis domain={['dataMin - 10', 'dataMax + 10']} hide />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#22D3EE" 
                    strokeWidth={2} 
                    dot={false}
                    isAnimationActive={true}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex justify-end">
              <Button variant="ghost" className="text-cyan-400 hover:text-cyan-300 gap-2">
                Open Console <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Recent Projects Table */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent Projects</h3>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400">
                <Filter className="w-4 h-4" />
              </Button>
              <Button variant="link" className="text-sm font-medium text-cyan-400">
                View all &rarr;
              </Button>
            </div>
          </div>
          
          <Card className="bg-[#0D1426] border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-gray-500 uppercase bg-[#060914] border-b border-white/5 font-semibold">
                  <tr>
                    <th className="px-6 py-4">Project</th>
                    <th className="px-6 py-4">Language</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Coverage</th>
                    <th className="px-6 py-4">Findings</th>
                    <th className="px-6 py-4">Last Run</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <ProjectRow 
                    name="libSecureParser" lang="C++" status="Fuzzing" 
                    coverage="72.4%" findings="2 Critical" findingsType="critical"
                    time="2 min ago" 
                  />
                  <ProjectRow 
                    name="ImageDecoder" lang="C" status="Complete" 
                    coverage="84.1%" findings="1 Warning" findingsType="warning"
                    time="1 hour ago" 
                  />
                  <ProjectRow 
                    name="NetworkCodec" lang="C++" status="Analyzing" 
                    coverage="--" findings="None" findingsType="none"
                    time="Just now" 
                  />
                  <ProjectRow 
                    name="example-library" lang="C" status="Complete" 
                    coverage="91.2%" findings="None" findingsType="none"
                    time="Yesterday" 
                  />
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Sidebar widgets */}
        <div className="space-y-6">
          
          {/* Quick Actions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <ActionCard icon={FolderGit2} label="New Analysis" />
              <ActionCard icon={UploadCloud} label="Upload Repo" />
              <ActionCard icon={Code2} label="Gen Harness" />
              <ActionCard icon={ShieldAlert} label="Review Findings" />
            </div>
          </div>

          {/* AI Insights */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              AI Security Insights
            </h3>
            
            <div className="bg-[#111A30] border border-purple-500/20 rounded-xl p-4 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">High-risk API path detected.</span>
                <code className="text-purple-400 bg-purple-900/30 px-1 py-0.5 rounded text-xs font-mono">process_input()</code> has a high pointer interaction score and 8 dependent functions.
              </p>
              <div className="pt-2">
                <Button variant="outline" size="sm" className="w-full text-purple-400 border-purple-500/30 hover:bg-purple-500/10">
                  Generate Harness
                </Button>
              </div>
            </div>

            <div className="bg-[#111A30] border border-yellow-500/20 rounded-xl p-4 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500"></div>
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white block mb-1">Coverage plateau detected.</span>
                Coverage in <code className="text-gray-400 font-mono text-xs">ImageDecoder</code> has remained below 75% for 8 minutes. Increase corpus diversity.
              </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

function MetricCard({ title, value, trend, icon: Icon, trendUp, alert }: any) {
  return (
    <Card className="bg-[#0D1426] border-white/5">
      <CardContent className="p-5 flex flex-col justify-between h-full">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Icon className={`w-4 h-4 ${alert ? 'text-rose-400' : 'text-gray-500'}`} />
          <h3 className="text-[11px] font-semibold tracking-widest uppercase truncate">{title}</h3>
        </div>
        <div>
          <p className={`text-2xl font-bold tracking-tight mb-1 ${alert ? 'text-rose-400' : 'text-white'}`}>
            {value}
          </p>
          <p className="text-xs text-gray-500 truncate">{trend}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function ActionCard({ icon: Icon, label }: any) {
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-[#0D1426] border border-white/5 rounded-xl hover:bg-[#111A30] transition-colors text-gray-300 hover:text-white group">
      <Icon className="w-5 h-5 mb-2 text-gray-500 group-hover:text-cyan-400 transition-colors" />
      <span className="text-[11px] font-medium text-center">{label}</span>
    </button>
  );
}

function ProjectRow({ name, lang, status, coverage, findings, time, findingsType }: any) {
  const getStatusBadge = () => {
    switch (status) {
      case 'Fuzzing': return <span className="flex items-center gap-1.5 text-xs font-medium text-cyan-400 bg-cyan-900/30 px-2 py-1 rounded border border-cyan-500/20"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span> Fuzzing</span>;
      case 'Complete': return <span className="flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-900/30 px-2 py-1 rounded border border-green-500/20"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Complete</span>;
      case 'Analyzing': return <span className="flex items-center gap-1.5 text-xs font-medium text-purple-400 bg-purple-900/30 px-2 py-1 rounded border border-purple-500/20"><TerminalSquare className="w-3 h-3" /> Analyzing</span>;
      default: return <span className="text-gray-400">{status}</span>;
    }
  };

  const getFindingsBadge = () => {
    switch(findingsType) {
      case 'critical': return <span className="text-xs font-medium text-rose-400 bg-rose-500/10 px-2 py-1 rounded border border-rose-500/20">{findings}</span>;
      case 'warning': return <span className="text-xs font-medium text-yellow-400 bg-yellow-500/10 px-2 py-1 rounded border border-yellow-500/20">{findings}</span>;
      default: return <span className="text-xs text-gray-500">{findings}</span>;
    }
  };

  return (
    <tr className="hover:bg-white/[0.02] transition-colors group">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#111A30] flex items-center justify-center border border-white/5">
            <FolderGit2 className="w-4 h-4 text-gray-400" />
          </div>
          <span className="font-medium text-white">{name}</span>
        </div>
      </td>
      <td className="px-6 py-4 font-mono text-xs text-gray-400">{lang}</td>
      <td className="px-6 py-4">{getStatusBadge()}</td>
      <td className="px-6 py-4 font-mono text-sm text-gray-300">{coverage}</td>
      <td className="px-6 py-4">{getFindingsBadge()}</td>
      <td className="px-6 py-4 text-gray-500 text-xs">{time}</td>
      <td className="px-6 py-4 text-right">
        <Button variant="ghost" className="h-8 px-3 text-gray-400 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all">
          View &rarr;
        </Button>
      </td>
    </tr>
  );
}
