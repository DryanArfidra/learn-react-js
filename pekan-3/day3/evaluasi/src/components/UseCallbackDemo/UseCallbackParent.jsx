import React, { useState, useCallback } from 'react';
import CallbackChild from './CallbackChild';

const UseCallbackParent = () => {
  const [count, setCount] = useState(0);
  const [unrelatedState, setUnrelatedState] = useState(0);

  // Fungsi tanpa useCallback (akan dibuat ulang setiap render)
  const handleClickWithoutCallback = () => {
    setCount(c => c + 1);
  };
  
  // Fungsi dengan useCallback (hanya dibuat ulang jika dependensi berubah)
  const handleClickWithCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Array dependensi kosong berarti fungsi tidak pernah dibuat ulang
  
  return (
    <section>
      <h2>3. Optimasi dengan useCallback</h2>
      <p>Jumlah klik: {count}</p>
      <button onClick={() => setUnrelatedState(s => s + 1)} style={{ marginBottom: '20px' }}>
        Ubah State Tidak Berhubungan ({unrelatedState})
      </button>
      <div className="demo-container">
        <div>
          <h4>Tanpa useCallback:</h4>
          <CallbackChild onClick={handleClickWithoutCallback} label="Tanpa Callback" />
        </div>
        <div>
          <h4>Dengan useCallback:</h4>
          <CallbackChild onClick={handleClickWithCallback} label="Dengan Callback" />
        </div>
      </div>
      <p className="note">
        <strong>Catatan:</strong> Lihat konsol. Saat "Ubah State Tidak Berhubungan" diklik, komponen "Tanpa Callback" akan di-render ulang, sedangkan "Dengan Callback" tidak.
      </p>
    </section>
  );
};

export default UseCallbackParent;
