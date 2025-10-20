// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-9xl font-bold text-gray-300 dark:text-slate-600">404</h1>
      <h2 className="text-4xl font-semibold text-gray-700 dark:text-slate-300 mt-4">Halaman Tidak Ditemukan</h2>
      <Link to="/" className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;