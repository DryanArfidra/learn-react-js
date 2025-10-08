import React, { useState } from 'react';

function SyntheticEventExample() {
  const [inputValue, setInputValue] = useState('');

  const handleLinkClick = (event) => {
    event.preventDefault();
    console.log('Link diklik! Navigasi dicegah.');
    alert('Lihat konsol untuk pesannya!');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="task-container">
      <h2>2. SyntheticEvent</h2>
      <a href="https://www.google.com" onClick={handleLinkClick}>
        Klik Link Ini (Tidak Akan Navigasi)
      </a>
      <hr style={{ margin: '15px 0' }} />
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Nilai input secara real-time: <strong>{inputValue}</strong></p>
    </div>
  );
}

export default SyntheticEventExample;