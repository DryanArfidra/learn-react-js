import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan telah dikirim!");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-blue-100 flex items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg bg-slate-800 border border-yellow-400/30 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/20 transition-all duration-300"
      >
        <h1 className="text-4xl font-bold text-center text-yellow-400 mb-4">
          Hubungi Kami
        </h1>

        <p className="text-center text-blue-200 mb-8">
          Punya pertanyaan atau ingin bekerja sama?  
          Kirim pesanmu di bawah ini dan tim <span className="text-yellow-400">R_Xanz</span> akan segera merespons.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block mb-2 font-medium text-yellow-400">
              Nama
            </label>
            <input
              type="text"
              placeholder="Masukkan nama kamu"
              required
              className="w-full bg-slate-900 border border-yellow-400/40 rounded-lg px-4 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <label className="block mb-2 font-medium text-yellow-400">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email kamu"
              required
              className="w-full bg-slate-900 border border-yellow-400/40 rounded-lg px-4 py-2 text-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <label className="block mb-2 font-medium text-yellow-400">
              Pesan
            </label>
            <textarea
              placeholder="Tulis pesanmu..."
              required
              className="w-full bg-slate-900 border border-yellow-400/40 rounded-lg px-4 py-2 text-blue-100 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold py-3 rounded-lg transition shadow-md"
          >
            Kirim Pesan
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
