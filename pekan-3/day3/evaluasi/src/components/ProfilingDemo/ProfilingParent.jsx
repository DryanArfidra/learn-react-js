import React, { useState } from 'react';
import HeavyComponent from './HeavyComponent';
import LightComponent from './LightComponent';

const ProfilingParent = () => {
  const [showHeavy, setShowHeavy] = useState(true);
  const [showLight, setShowLight] = useState(true);
  
  return (
    <section>
      <h2>5. Performance Profiling</h2>
      <div className="controls">
        <button onClick={() => setShowHeavy(!showHeavy)}>
          {showHeavy ? 'Sembunyikan' : 'Tampilkan'} Komponen Berat
        </button>
        <button onClick={() => setShowLight(!showLight)}>
          {showLight ? 'Sembunyikan' : 'Tampilkan'} Komponen Ringan
        </button>
      </div>
      {showHeavy && <HeavyComponent />}
      {showLight && <LightComponent />}
      <div className="profiling-guide">
        <h4>Panduan Profiling:</h4>
        <ol>
          <li>Buka React DevTools.</li>
          <li>Pergi ke tab "Profiler".</li>
          <li>Klik "Record", lalu lakukan interaksi (misalnya, toggle komponen).</li>
          <li>Klik "Stop" dan analisis grafik "Flamechart" untuk melihat waktu render setiap komponen.</li>
        </ol>
      </div>
    </section>
  );
};

export default ProfilingParent;