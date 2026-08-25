import { Card, CardContent } from "@/components/ui/card";

export default function Coverage() {
  return (
    <div className="space-y-6 text-center py-20">
      <h1 className="text-3xl font-bold text-white">Coverage Dashboard</h1>
      <p className="text-gray-400 max-w-lg mx-auto">This section displays dedicated coverage analytics, heatmaps, and source exploration for analyzed fuzzing campaigns.</p>
      
      <div className="flex justify-center space-x-12 mt-12">
        <div className="relative w-40 h-40 rounded-full border-8 border-cyan-950 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-cyan-400 border-t-transparent border-r-transparent transform -rotate-45"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">72%</div>
            <div className="text-xs text-gray-400">Line Cov</div>
          </div>
        </div>
        <div className="relative w-40 h-40 rounded-full border-8 border-purple-950 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-purple-500 border-t-transparent transform -rotate-12"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">81%</div>
            <div className="text-xs text-gray-400">Function</div>
          </div>
        </div>
        <div className="relative w-40 h-40 rounded-full border-8 border-blue-950 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent border-l-transparent border-r-transparent transform rotate-45"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white font-mono">64%</div>
            <div className="text-xs text-gray-400">Branch</div>
          </div>
        </div>
      </div>
    </div>
  )
}
