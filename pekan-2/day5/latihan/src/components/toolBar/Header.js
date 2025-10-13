import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: theme === 'light' ? '#FFF' : '#333',
    color: theme === 'light' ? '#333' : '#FFF',
    borderBottom: '1px solid #ccc',
  };

  return (
    <header style={styles}>
      <h1>Aplikasi TaskFlow</h1>
      <button onClick={toggleTheme}>
        Ganti ke {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
}

export default Header;