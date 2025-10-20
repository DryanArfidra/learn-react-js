import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Dashboard = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
      isActive
        ? "bg-yellow-400 text-[#0f172a] shadow-md"
        : "text-yellow-400 hover:bg-yellow-400/20 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-8 pt-20">
      {/* Judul Dashboard */}
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard r_xanz
      </motion.h1>

      {/* Navigasi */}
      <motion.nav
        className="flex justify-center space-x-6 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <NavLink to="profile" className={linkClass}>
          Profile
        </NavLink>
        <NavLink to="settings" className={linkClass}>
          Settings
        </NavLink>
      </motion.nav>

      {/* Konten */}
      <motion.div
        className="max-w-3xl mx-auto bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-yellow-500/30"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Outlet /> {/* Halaman Profile/Settings akan tampil di sini */}
      </motion.div>
    </div>
  );
};

export default Dashboard;
