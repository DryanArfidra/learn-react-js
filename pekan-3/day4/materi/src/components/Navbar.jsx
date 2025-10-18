import React from 'react';

const Navbar = ({ onToggle }) => {
  return (
    // Navbar Fixed di bagian atas
    <nav className="fixed top-0 left-0 right-0 h-16 bg-slate-900 text-white z-50 flex items-center justify-between px-5 shadow-lg">
      
      {/* Tombol Toggle Sidebar */}
      <button
        onClick={onToggle}
        className="p-2 rounded-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500"
      >
        {/* Ikon Hamburger */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Nama Toko */}
      <h1 className="text-xl font-bold">r_xanz</h1>

      {/* Placeholder untuk elemen kanan (misal: user profile) */}
      <div className="w-9"></div> 
    </nav>
  );
};

export default Navbar;