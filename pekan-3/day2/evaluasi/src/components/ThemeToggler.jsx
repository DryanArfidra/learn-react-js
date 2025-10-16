import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function ThemeToggler() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`theme-container ${theme}`}>
      <h3>Tema Saat Ini: {theme === 'light' ? 'Terang' : 'Gelap'}</h3>
      <button onClick={toggleTheme}>Ganti Tema</button>
      <p><small>Refresh halaman untuk melihat preferensi tersimpan.</small></p>
    </div>
  );
}

export default ThemeToggler;