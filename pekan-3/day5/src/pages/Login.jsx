import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-yellow-600">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-96 border border-yellow-500/50"
      >
        <h2 className="text-3xl font-extrabold mb-4 text-center text-yellow-400 drop-shadow">
          Login ke Toko R_Xanz
        </h2>
        <p className="mb-6 text-center text-gray-200">
          Masukkan username dan password Anda untuk melanjutkan.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-yellow-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Masukkan username"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-yellow-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-yellow-500 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-blue-900 font-bold py-3 rounded-lg shadow-lg transition"
          >
            Login
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
