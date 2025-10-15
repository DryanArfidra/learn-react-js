import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="theme-button">
      Ganti Tema ({theme === 'light' ? 'dark' : 'light'})
    </button>
  );
};

export default ThemeButton;