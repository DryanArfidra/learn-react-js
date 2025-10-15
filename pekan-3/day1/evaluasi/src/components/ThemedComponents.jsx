import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Komponen Button
export const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className={`btn btn-${theme}`}>
      Toggle ke {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

// Komponen Card
export const ThemedCard = ({ title, content }) => {
  const { theme } = useTheme();
  return (
    <div className={`card card-${theme}`}>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

// Komponen Text
export const ThemedText = () => {
  const { theme } = useTheme();
  return <p className={`text text-${theme}`}>Teks ini berubah warna sesuai tema ({theme}).</p>;
};