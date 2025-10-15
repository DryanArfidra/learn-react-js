import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

// 3. Buat Provider Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Gunakan useEffect untuk menerapkan tema ke elemen <html> saat tema berubah
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Value yang akan diberikan ke semua komponen anak
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};