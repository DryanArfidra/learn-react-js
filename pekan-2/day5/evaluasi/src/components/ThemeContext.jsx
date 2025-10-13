import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemedComponent = () => {
  const { theme } = useTheme();
  
  const styles = {
    padding: '15px',
    margin: '10px',
    border: '1px solid #ccc',
    backgroundColor: theme === 'light' ? '#f9f9f9' : '#333',
    color: theme === 'light' ? '#333' : '#f9f9f9',
    display: 'inline-block'
  };
  
  return (
    <div style={styles}>
      <h3>Komponen dengan Tema</h3>
      <p>Tema saat ini: {theme}</p>
    </div>
  );
};

const ThemeContextComponent = () => {
  const { theme, toggleTheme } = useTheme();
  
  const containerStyles = {
    padding: '20px',
    border: '1px solid #aaa',
    margin: '20px 0',
    backgroundColor: theme === 'light' ? '#fff' : '#222',
    color: theme === 'light' ? '#333' : '#fff'
  };
  
  return (
    <div style={containerStyles}>
      <h2>Context API untuk Tema</h2>
      <button onClick={toggleTheme}>
        Ganti Tema ke {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      <div>
        <ThemedComponent />
        <ThemedComponent />
      </div>
    </div>
  );
};

export default ThemeContextComponent;