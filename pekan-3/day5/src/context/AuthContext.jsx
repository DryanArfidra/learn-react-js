import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // Untuk menyimpan info user
  const navigate = useNavigate();

  // Fungsi login sekarang menerima username dan password
  const login = (username, password) => {
    // Validasi sederhana: pastikan username dan password tidak kosong
    // Di aplikasi nyata, Anda akan memeriksanya dengan API
    if (username && password) {
      setIsAuthenticated(true);
      setUser({ username }); // Simpan username untuk ditampilkan
      navigate('/products'); // Arahkan ke products setelah login berhasil
    } else {
      alert('Username dan Password harus diisi!');
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);