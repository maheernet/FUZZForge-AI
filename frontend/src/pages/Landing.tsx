import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldAlert, Activity, FileCode2, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#050814] text-white overflow-hidden bg-grid-pattern relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-[#050814] to-[#050814] pointer-events-none" />
      
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
          <ShieldAlert className="w-8 h-8 text-cyan-400" />
          <span className="text-2xl font-bold tracking-wider">
            FuzzForge <span className="text-cyan-400 glow-text">AI</span>
          </span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#workflow" className="hover:text-cyan-400 transition-colors">Workflow</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
        </div>
        <div className="flex space-x-4">
          <Button variant="ghost" className="text-gray-300">Login</Button>
          <Button asChild>
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            Automating C/C++ Fuzz Harness <br className="hidden md:block" /> Generation for Smarter Security
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto font-light">
            Turn unfamiliar C/C++ libraries into fuzzing-ready security targets in minutes. 
            Analyze. Generate. Fuzz. Discover.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="w-full sm:w-auto h-14 text-lg px-8" asChild>
              <Link to="/projects/new">Start Security Analysis</Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 text-lg px-8 glow-border bg-[#0a1128]/50" asChild>
              <Link to="/dashboard">Explore Demo</Link>
            </Button>
          </div>
        </motion.div>

        {/* Pipeline Animation */}
        <motion.div 
          className="mt-24 flex items-center justify-center space-x-4 max-w-5xl mx-auto overflow-x-auto pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { icon: FileCode2, text: "C/C++ Library" },
            { icon: Activity, text: "Static Analysis" },
            { icon: Target, text: "AI Generation" },
            { icon: Zap, text: "libFuzzer" },
            { icon: ShieldAlert, text: "Vuln Report", color: "text-pink-500" }
          ].map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl glass glow-border flex items-center justify-center mb-3 ${step.color || 'text-cyan-400'}`}>
                  <step.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-400 whitespace-nowrap">{step.text}</span>
              </div>
              {i < 4 && (
                <div className="w-16 md:w-24 h-[2px] mx-4 relative bg-gray-800">
                  <div className="absolute inset-0 bg-cyan-400 animate-pulse" style={{ boxShadow: '0 0 10px rgba(0,240,255,0.5)' }}></div>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </main>

    </div>
  );
}
