import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@/components/layout/DashboardLayout';

// Pages
import Landing from '@/pages/Landing';
import Dashboard from '@/pages/Dashboard';
import Upload from '@/pages/Upload';
import Analyze from '@/pages/Analyze';
import GraphView from '@/pages/GraphView';
import HarnessGen from '@/pages/HarnessGen';
import FuzzingConsole from '@/pages/FuzzingConsole';
import Findings from '@/pages/Findings';
import CrashDetail from '@/pages/CrashDetail';
import Coverage from '@/pages/Coverage';
import Reports from '@/pages/Reports';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects/new" element={<Upload />} />
          <Route path="/projects" element={<Navigate to="/dashboard" replace />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/graph" element={<GraphView />} />
          <Route path="/harness" element={<HarnessGen />} />
          <Route path="/fuzzing" element={<FuzzingConsole />} />
          <Route path="/findings" element={<Findings />} />
          <Route path="/findings/:id" element={<CrashDetail />} />
          <Route path="/coverage" element={<Coverage />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/cicd" element={<div className="p-8 text-white">CI/CD Coming Soon</div>} />
          <Route path="/settings" element={<div className="p-8 text-white">Settings Coming Soon</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
