import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import UserProfileComponent from "./components/UserProfile";
import { motion } from "framer-motion";

function App() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleMinus = () => setCount(count - 1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Animasi container utama */}
      <motion.div
        className="w-full max-w-5xl flex flex-col items-center gap-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Judul Halaman */}
        <motion.h1
          className="text-4xl font-bold text-gray-800 text-center mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Dashboard Pengguna ✨
        </motion.h1>

        {/* Komponen Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full sm:w-[400px]"
        >
          <Counter count={count} handleAdd={handleAdd} handleMinus={handleMinus} />
        </motion.div>

        {/* Garis pembatas elegan */}
        <motion.div
          className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Komponen User Profile */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full sm:w-[500px]"
        >
          <UserProfileComponent />
        </motion.div>

       
      </motion.div>
    </div>
  );
}

export default App;
