import React, { useState, useEffect } from 'react';

function SimpleEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Komponen dirender atau di-update.');
  });

  return (
    <div>
      <p>Nilai count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah Count
      </button>
      <p>- pesan dalam console</p>
    </div>
  );
}

export default SimpleEffect;