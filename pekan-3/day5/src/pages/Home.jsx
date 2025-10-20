import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const testimonials = [
    {
      name: "Raka",
      comment:
        "Pakaian dari R_Xanz nyaman banget dipakai, kualitasnya luar biasa! Pengiriman cepat dan pelayanan memuaskan.",
    },
    {
      name: "Dinda",
      comment:
        "Desainnya elegan dan bahan adem, cocok banget buat dipakai ke acara formal atau santai.",
    },
    {
      name: "Rizky",
      comment:
        "Sudah beberapa kali beli di R_Xanz, nggak pernah kecewa. Selalu dapet pujian dari teman-teman!",
    },
    {
      name: "Sinta",
      comment:
        "Adminnya responsif, pengemasan super rapi, dan produk terlihat eksklusif. Worth it banget!",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-blue-100 pt-10">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
        >
          Selamat Datang di{" "}
          <span className="text-yellow-400">R_Xanz Store</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl text-blue-200"
        >
          Eksplorasi gaya modern dengan sentuhan elegan. Koleksi pakaian dari
          R_Xanz dirancang untuk menghadirkan kenyamanan dan kepercayaan diri
          dalam setiap langkahmu.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
        >
          Belanja Sekarang
        </motion.button>
      </section>

      {/* Testimoni Pelanggan */}
      <section className="py-20 bg-gradient-to-t from-slate-800 to-slate-900 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-14 text-yellow-400"
        >
          Testimoni Pelanggan Kami
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-slate-800 border border-yellow-400/30 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
            >
              <p className="text-blue-100 italic mb-4 leading-relaxed">
                “{testi.comment}”
              </p>
              <h4 className="font-semibold text-yellow-400 text-right">
                — {testi.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400"
        >
          Jadilah bagian dari pelanggan istimewa{" "}
          <span className="text-white">R_Xanz</span>
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
        >
          Mulai Belanja
        </motion.button>
      </section>
    </div>
  );
}
