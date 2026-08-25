import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadCloud, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Upload() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Create Security Analysis</h1>
        <p className="text-gray-400 mt-2">Upload a C/C++ repository to begin automated fuzzing harness generation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className={`border-dashed border-2 transition-colors ${dragActive ? 'border-cyan-500 bg-cyan-950/20' : 'border-gray-600 hover:border-gray-500'}`}>
          <CardContent className="p-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#0a1128] flex items-center justify-center glow-border">
              <UploadCloud className="w-8 h-8 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Upload Repository</h3>
              <p className="text-sm text-gray-400 mt-1">Drag and drop your .zip file here</p>
            </div>
            <Button variant="outline" className="mt-4">Browse Files</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-white flex items-center">
                Connect Repository
              </h3>
              <p className="text-sm text-gray-400">Import directly from a public or private repository.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Repository URL</label>
                <input 
                  type="text" 
                  className="w-full mt-1 bg-[#0a1128] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="https://github.com/example/libSecureParser"
                  defaultValue="https://github.com/example/libSecureParser"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Branch</label>
                  <input type="text" className="w-full mt-1 bg-[#0a1128] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-2 text-white" defaultValue="main" />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Language</label>
                  <select className="w-full mt-1 bg-[#0a1128] border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-2 text-white">
                    <option>C++</option>
                    <option>C</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.1)]">
              <Button className="w-full h-12 text-lg" asChild>
                <Link to="/analyze">
                  Start Analysis <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
