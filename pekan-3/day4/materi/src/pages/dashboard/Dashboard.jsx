import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  
  const linkClass = (path) =>
    location.pathname === path
      ? 'border-b-2 border-blue-500 text-blue-500 font-bold'
      : 'text-gray-600 hover:text-blue-500';

  return (
    <div className="flex">
      <aside className="w-48 p-4">
        <h3 className="text-xl font-semibold mb-4">Dashboard</h3>
        <nav className="flex flex-col space-y-2">
          <Link to="profile" className={linkClass('/dashboard/profile')}>
            Profile
          </Link>
          <Link to="settings" className={linkClass('/dashboard/settings')}>
            Settings
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;