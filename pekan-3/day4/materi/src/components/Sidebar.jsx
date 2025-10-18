import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  const linkClass = ({ isActive }) =>
    `block py-3 px-4 rounded-md transition-colors duration-300 ${
      isActive
        ? 'bg-blue-500 text-white font-bold'
        : 'text-slate-300 hover:bg-slate-700'
    }`;

  return (
    // Sidebar Fixed di sisi, dimulai dari bawah navbar
    <div
      className={`fixed top-16 left-0 h-full bg-slate-800 text-white p-5 flex flex-col z-40 transition-transform duration-300 ease-in-out w-64 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Nama toko dan tombol toggle sudah dipindah ke Navbar */}

      <nav className="flex flex-col space-y-2 mt-5">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;