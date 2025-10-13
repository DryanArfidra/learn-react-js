import React from 'react';

const Level3Component = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', margin: '5px 0' }}>
      <h4>Komponen Level 3</h4>
      <p>Data dari komponen level 1: {data}</p>
    </div>
  );
};

const Level2Component = ({ data }) => {
  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', margin: '5px 0' }}>
      <h3>Komponen Level 2</h3>
      <p>Meneruskan data ke komponen level 3</p>
      <Level3Component data={data} />
    </div>
  );
};

const PropDrilling = () => {
  const data = "Ini adalah data dari komponen level 1";
  
  return (
    <div style={{ padding: '20px', border: '1px solid #aaa', margin: '20px 0' }}>
      <h2>Tugas ke-2</h2>
      <p>Data akan diteruskan dari komponen level 1 ke level 3 melalui props</p>
      <Level2Component data={data} />
    </div>
  );
};

export default PropDrilling;