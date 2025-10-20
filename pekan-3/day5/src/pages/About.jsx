import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-blue-100 pt-10">
      {/* Header Section */}
      <section className="flex flex-col items-center text-center py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-yellow-400"
        >
          Tentang <span className="text-white">R_Xanz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl max-w-3xl text-blue-200"
        >
          R_Xanz adalah toko pakaian modern yang mengutamakan kenyamanan,
          kualitas, dan gaya elegan. Kami percaya bahwa setiap pakaian bukan
          hanya tentang tampilan, tetapi juga tentang kepercayaan diri.
        </motion.p>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 bg-gradient-to-t from-slate-800 to-slate-900 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-12 text-yellow-400"
          >
            Visi & Misi Kami
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-blue-200 leading-relaxed max-w-3xl mx-auto mb-6"
          >
            Visi kami adalah menjadikan R_Xanz sebagai pilihan utama untuk
            pakaian berkualitas di Indonesia yang mengedepankan desain elegan
            dan nyaman dikenakan. Kami berkomitmen untuk memberikan pelayanan
            terbaik dan memastikan setiap pelanggan merasa istimewa.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-blue-200 leading-relaxed max-w-3xl mx-auto"
          >
            Misi kami adalah menghadirkan produk-produk pakaian yang tidak hanya
            stylish, tetapi juga mencerminkan kepribadian pemakainya. Kami
            percaya bahwa keindahan sejati lahir dari perpaduan antara desain,
            kenyamanan, dan ketulusan pelayanan.
          </motion.p>
        </div>
      </section>

      {/* Nilai & Filosofi */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Kualitas Premium",
              desc: "Kami hanya menggunakan bahan pilihan terbaik agar pelanggan merasakan kenyamanan maksimal setiap saat.",
            },
            {
              title: "Desain Elegan",
              desc: "Setiap potongan pakaian kami rancang dengan detail dan estetika tinggi, mencerminkan karakter modern dan berkelas.",
            },
            {
              title: "Pelayanan Terbaik",
              desc: "Kepuasan pelanggan adalah prioritas utama kami. Setiap transaksi kami layani dengan cepat, ramah, dan profesional.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-slate-800 border border-yellow-400/30 p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="text-center py-16 bg-gradient-to-t from-slate-800 to-slate-900">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-semibold mb-6 text-yellow-400"
        >
          R_Xanz — Lebih dari sekadar pakaian, ini tentang gaya dan keyakinan.
        </motion.h3>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 text-slate-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition-all duration-300"
        >
          Jelajahi Koleksi Kami
        </motion.button>
      </section>
    </div>
  );
}
