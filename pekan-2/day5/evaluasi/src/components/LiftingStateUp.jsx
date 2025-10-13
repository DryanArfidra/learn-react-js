import React, { useState } from 'react';

const Input1 = ({ value, onChange }) => {
  return (
    <div>
      <label>Input 1: </label>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
};

const Input2 = ({ value, onChange }) => {
  return (
    <div>
      <label>Input 2: </label>
      <input 
        type="number" 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
};

const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState(0);
  
  const handleChange = (newValue) => {
    setInputValue(newValue);
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px 0' }}>
      <h2>Tugas ke-1</h2>
      <p>Nilai saat ini: {inputValue}</p>
      <Input1 value={inputValue} onChange={handleChange} />
      <Input2 value={inputValue} onChange={handleChange} />
      <p>Kedua input terhubung dan akan menampilkan nilai yang sama</p>
    </div>
  );
};

export default LiftingStateUp;