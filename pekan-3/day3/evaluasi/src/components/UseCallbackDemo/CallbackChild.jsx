import React from 'react';
import { memo } from 'react';

const CallbackChild = memo(({ onClick, label }) => {
  console.log(`🟡 CallbackChild (${label}) di-render`);
  return (
    <div className="demo-box">
      <h3>Komponen Anak ({label})</h3>
      <button onClick={onClick}>Klik Saya</button>
    </div>
  );
});

export default CallbackChild;