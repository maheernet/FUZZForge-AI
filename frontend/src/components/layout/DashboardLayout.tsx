import { Outlet, Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, FolderGit2, ScanSearch, Network, Code2,
  Zap, Activity, ShieldAlert, FileText, GitBranch, Settings,
  Search, Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";

const sidebarSections = [
  {
    title: "OVERVIEW",
    items: [
      { name: "Overview", path: "/dashboard", icon: LayoutDashboard }
    ]
  },
  {
    title: "ANALYSIS",
    items: [
      { name: "Projects", path: "/projects", icon: FolderGit2 },
      { name: "Analyze", path: "/analyze", icon: ScanSearch },
      { name: "Dependency Graph", path: "/dependency-graph", icon: Network },
      { name: "Harness Generator", path: "/harness-generator", icon: Code2 },
    ]
  },
  {
    title: "FUZZING",
    items: [
      { name: "Fuzzing Console", path: "/fuzzing", icon: Zap },
      { name: "Coverage", path: "/coverage", icon: Activity },
    ]
  },
  {
    title: "SECURITY",
    items: [
      { name: "Findings", path: "/findings", icon: ShieldAlert, badge: 7 },
      { name: "Reports", path: "/reports", icon: FileText },
    ]
  },
  {
    title: "INTEGRATION",
    items: [
      { name: "CI/CD", path: "/cicd", icon: GitBranch },
    ]
  }
];

export default function DashboardLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    switch(location.pathname) {
      case "/dashboard": return "Workspace / Overview";
      case "/projects": return "Workspace / Projects";
      case "/analyze": return "Workspace / Analyze";
      case "/dependency-graph": return "Workspace / Dependency Graph";
      case "/harness-generator": return "Workspace / Harness Generator";
      case "/fuzzing": return "Workspace / Fuzzing Console";
      case "/coverage": return "Workspace / Coverage";
      case "/findings": return "Workspace / Findings";
      case "/reports": return "Workspace / Reports";
      case "/cicd": return "Workspace / CI/CD";
      case "/settings": return "Workspace / Settings";
      default: return "Workspace / Overview";
    }
  }

  return (
    <div className="flex h-screen bg-[#060914] text-white bg-grid-pattern overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-[260px] h-full flex flex-col bg-[#0A1020] border-r border-white/5 flex-shrink-0">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-white">FuzzForge AI</h2>
              <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase mt-0.5">Security Workspace</p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-6 scrollbar-none">
          {sidebarSections.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <h3 className="px-3 text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              {section.items.map((item) => {
                const isActive = location.pathname === item.path || (location.pathname === '/' && item.path === '/dashboard');
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive 
                        ? 'bg-cyan-500/10 text-cyan-400' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-500'}`} />
                      {item.name}
                    </div>
                    {item.badge && (
                      <span className="bg-rose-500/20 text-rose-400 py-0.5 px-2 rounded-full text-[10px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="space-y-1 mb-4">
            <Link
              to="/settings"
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                location.pathname === '/settings'
                  ? 'bg-cyan-500/10 text-cyan-400' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Settings className="w-4 h-4 text-gray-500" />
              Settings
            </Link>
            <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              System Operational
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#060914] border border-white/5 cursor-pointer hover:bg-white/5 transition-colors">
            <div className="w-8 h-8 rounded-full bg-cyan-900/50 flex items-center justify-center text-cyan-400 font-semibold text-xs border border-cyan-500/30">
              JD
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-white truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">Security Engineer</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative z-10">
        
        {/* Topbar */}
        <header className="h-16 px-8 flex items-center justify-between border-b border-white/5 bg-[#060914]/80 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {getPageTitle()}
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex h-8 gap-2 bg-[#0A1020] border-white/10 text-gray-400 hover:text-white hover:bg-[#111A30] px-3 w-64 justify-between">
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5" />
                <span className="font-normal text-xs">Search anything...</span>
              </div>
              <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-gray-400">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-white">
              <Bell className="w-4 h-4" />
            </Button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      
      {/* Soft radial glow */}
      <div className="absolute top-0 left-[260px] w-full h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
