// src/App.jsx

import React, { useState, useRef } from 'react';

// --- KOMPONEN UTAMA: MENGGUNAKAN CONTROLLED COMPONENT ---
function RegistrationForm() {
  // State untuk menyimpan nilai input form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State untuk menyimpan pesan error validasi
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State untuk menandai apakah form sudah berhasil disubmit
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- 1. EVENT HANDLING & 5. INPUT VALIDASI SEDERHANA ---
  // Fungsi handler untuk setiap perubahan di input
  const handleChange = (e) => {
    // e adalah objek SyntheticEvent dari React
    const { name, value } = e.target;
    
    // Update state formData
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validasi Real-time
    let errorMessage = '';
    if (name === 'email' && value && !value.includes('@')) {
      errorMessage = 'Email harus mengandung karakter "@"';
    }
    if (name === 'password' && value && value.length < 6) {
      errorMessage = 'Password minimal 6 karakter';
    }
    if (name === 'username' && value && value.length < 3) {
      errorMessage = 'Username minimal 3 karakter';
    }

    // Update state errors
    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  // --- 4. FORM SUBMISSION ---
  // Fungsi handler saat form disubmit
  const handleSubmit = (e) => {
    // e adalah objek SyntheticEvent
    // Mencegah perilaku default browser (refresh halaman)
    e.preventDefault(); 

    // Validasi final sebelum submit
    let finalErrors = {};
    if (!formData.username) finalErrors.username = 'Username wajib diisi';
    if (!formData.email) finalErrors.email = 'Email wajib diisi';
    if (!formData.password) finalErrors.password = 'Password wajib diisi';
    if (formData.email && !formData.email.includes('@')) finalErrors.email = 'Email tidak valid';
    if (formData.password && formData.password.length < 6) finalErrors.password = 'Password terlalu pendek';

    if (Object.keys(finalErrors).length > 0) {
      setErrors(finalErrors);
      return; // Hentikan proses jika ada error
    }

    // Jika tidak ada error, proses data
    console.log('Data Form yang Dikirim:', formData);
    setIsSubmitted(true);
    // Reset form setelah submit (opsional)
    // setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Form Pendaftaran (Controlled)</h2>
        
        {/* Menampilkan pesan sukses */}
        {isSubmitted && (
          <p className="mb-4 text-center text-green-500 font-semibold">Pendaftaran Berhasil!</p>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Input Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username} // Nilai dikontrol oleh state
              onChange={handleChange}   // Perubahan dikontrol oleh handler
              className={`mt-1 block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {/* Tampilkan pesan error */}
            {errors.username && <p className="mt-1 text-xs text-red-500">{errors.username}</p>}
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Input Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}


// --- BONUS: KOMPONEN UNCONTROLLED UNTUK PERBANDINGAN ---
function UncontrolledExample() {
    // Menggunakan useRef untuk akses langsung ke elemen DOM
    const usernameRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Akses nilai input langsung dari DOM via ref
        alert(`Halo, ${usernameRef.current.value}! Ini adalah data dari Uncontrolled Component.`);
    };

    return (
        <div className="mt-10 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="text-lg font-bold mb-3">Contoh Uncontrolled Component</h3>
            <p className="text-sm text-gray-600 mb-4">Nilai input tidak di-tracking oleh state React. Diakses langsung saat submit.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Masukkan nama"
                    ref={usernameRef} // Menghubungkan input ke ref
                    className="px-3 py-2 border border-gray-300 rounded-md"
                />
                <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">Kirim</button>
            </form>
        </div>
    );
}


// --- KOMPONEN APP UTAMA ---
function App() {
  return (
    <div>
      <RegistrationForm />
      <div className="flex items-center justify-center">
        <UncontrolledExample />
      </div>
    </div>
  );
}

export default App;