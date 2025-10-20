import React from "react";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-10">
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-400 mb-8"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pengaturan Akun
      </motion.h1>

      <motion.form
        className="max-w-lg mx-auto bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-yellow-500/30 space-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div>
          <label className="block mb-2 text-yellow-400 font-medium">Nama Toko</label>
          <input
            type="text"
            placeholder="r_xanz"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-500/30 text-white focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-400 font-medium">Email</label>
          <input
            type="email"
            placeholder="admin@rxanz.com"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-500/30 text-white focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-yellow-400 font-medium">Kata Sandi Baru</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] border border-yellow-500/30 text-white focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#0f172a] font-semibold py-3 rounded-lg shadow-md transition"
        >
          Simpan Perubahan
        </button>
      </motion.form>
    </div>
  );
};

export default Settings;
