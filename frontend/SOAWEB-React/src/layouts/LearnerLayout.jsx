import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import TopBar from '../components/navigation/TopBar';
import './LearnerLayout.css';

/**
 * Layout for authenticated learner pages:
 * Dashboard, Practice, Analysis, Profile, Settings
 */
export default function LearnerLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="learner-layout">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="learner-content">
        <TopBar onMenuToggle={() => setSidebarOpen((v) => !v)} />
        <main className="learner-main" id="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
