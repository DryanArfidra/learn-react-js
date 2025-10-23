import React from "react";
import { motion } from "framer-motion";

interface CounterProps {
  count: number;
  handleAdd: () => void;
  handleMinus: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, handleAdd, handleMinus }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[200px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>

      <div className="flex items-center gap-6">
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleMinus}
          className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-xl px-5 py-2 shadow-md transition-all"
        >
          Kurang
        </motion.button>

        <motion.p
          key={count} // supaya animasi berubah tiap count berubah
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-3xl font-bold text-gray-700 min-w-[50px] text-center"
        >
          {count}
        </motion.p>

        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleAdd}
          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl px-5 py-2 shadow-md transition-all"
        >
          Tambah
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Counter;
