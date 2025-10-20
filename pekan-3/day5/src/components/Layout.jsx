import React, { useState } from 'react'; // Import useState
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk sidebar

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar dengan props untuk status dan fungsi toggle */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      {/* Main Content dengan margin yang dinamis */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Navbar dengan fungsi toggle */}
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;