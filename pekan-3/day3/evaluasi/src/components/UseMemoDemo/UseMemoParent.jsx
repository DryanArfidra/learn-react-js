import React, { useState } from 'react';
import ExpensiveCalculation from './ExpensiveCalculation';

const UseMemoParent = () => {
  const [number, setNumber] = useState(5);
  const [multiplier, setMultiplier] = useState(2);
  const [otherState, setOtherState] = useState(0);
  
  return (
    <section>
      <h2>2. Optimasi dengan useMemo</h2>
      <div className="controls">
        <label>
          Angka:
          <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
        </label>
        <label>
          Pengali:
          <input type="number" value={multiplier} onChange={(e) => setMultiplier(Number(e.target.value))} />
        </label>
        <button onClick={() => setOtherState(otherState + 1)}>
          Ubah State Lain ({otherState})
        </button>
      </div>
      <ExpensiveCalculation number={number} multiplier={multiplier} />
      <p className="note">
        <strong>Catatan:</strong> Lihat konsol. Perhitungan hanya dijalankan ulang saat "Angka" atau "Pengali" berubah.
      </p>
    </section>
  );
};

export default UseMemoParent;