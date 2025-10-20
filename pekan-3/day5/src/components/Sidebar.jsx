import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => { // Terima props
  const linkClass = ({ isActive }) =>
    `block p-3 rounded transition-colors duration-200 ${
      isActive ? 'bg-blue-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`;

  return (
    // Tambahkan class untuk animasi dan posisi
    <aside className={`fixed left-0 top-0 h-screen bg-slate-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 pt-16`}>
      <div className="p-4">
        <ul>
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          <li><NavLink to="/products" className={linkClass}>Products</NavLink></li>
          <li><NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink></li>
        </ul>
        {/* Tombol logout dihapus dari sini */}
      </div>
    </aside>
  );
};

export default Sidebar;