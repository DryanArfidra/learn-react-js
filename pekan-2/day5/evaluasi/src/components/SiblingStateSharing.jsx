import React, { useState } from 'react';

const Sibling1 = ({ count, onIncrement }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', margin: '10px', display: 'inline-block' }}>
      <h3>Komponen Saudara 1</h3>
      <p>Nilai counter: {count}</p>
      <button onClick={onIncrement}>Tambah</button>
    </div>
  );
};

const Sibling2 = ({ count, onDecrement }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #ccc', margin: '10px', display: 'inline-block' }}>
      <h3>Komponen Saudara 2</h3>
      <p>Nilai counter: {count}</p>
      <button onClick={onDecrement}>Kurang</button>
    </div>
  );
};

const SiblingStateSharing = () => {
  const [count, setCount] = useState(0);
  
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  const handleDecrement = () => {
    setCount(count - 1);
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #aaa', margin: '20px 0' }}>
      <h2>Tugas ke-3</h2>
      <p>Kedua komponen saudara berbagi state yang sama melalui komponen induk</p>
      <div>
        <Sibling1 count={count} onIncrement={handleIncrement} />
        <Sibling2 count={count} onDecrement={handleDecrement} />
      </div>
    </div>
  );
};

export default SiblingStateSharing;