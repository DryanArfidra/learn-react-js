import React from "react";
import { motion } from "framer-motion";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-10 flex flex-col items-center">
      <motion.div
        className="bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-yellow-500/30 max-w-md w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6_-nHzHvtDkcQbc7hQj8BlG0TXpatt4F-Cc0tjEamL2-GBzC4xb8A7TxXdWwfwsAv9Y&usqp=CAU"
            alt="Profile"
            className="rounded-full mx-auto border-4 border-yellow-400"
          />
          <h2 className="text-2xl font-bold mt-4 text-yellow-400">
            Aryan Arfidra
          </h2>
          <p className="text-gray-300">Pemilik Toko r_xanz</p>
        </div>

        <div className="space-y-3 text-gray-200">
          <p><span className="text-yellow-400 font-semibold">Email:</span> aryan@rxanz.com</p>
          <p><span className="text-yellow-400 font-semibold">Telepon:</span> +62 812-3456-7890</p>
          <p><span className="text-yellow-400 font-semibold">Alamat:</span> Bandung, Indonesia</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
