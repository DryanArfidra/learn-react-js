import React, { createContext, useState, useContext } from 'react';

// 1. Buat Context dan EKSPOR
export const UserContext = createContext(null); // <-- TAMBAHKAN 'export' DI SINI

// 2. Buat Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isLoggedIn: false,
  });

  const login = (name, email) => {
    setUser({ name, email, isLoggedIn: true });
  };

  const logout = () => {
    setUser({ name: '', email: '', isLoggedIn: false });
  };

  const updateProfile = (newData) => {
    setUser(prevUser => ({ ...prevUser, ...newData }));
  };

  const value = {
    user,
    login,
    logout,
    updateProfile,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// 3. Buat Custom Hook (ini tidak perlu diubah)
export const useUser = () => {
  return useContext(UserContext);
};