import React, { useState } from 'react';
import MemoChild from './MemoChild';

const MemoParent = () => {
  const [parentData, setParentData] = useState('Data Induk Awal');
  const [childData, setChildData] = useState('Data Anak Awal');

  const handleParentClick = () => {
    setParentData(`Data Induk Diubah ${Date.now()}`);
  };

  return (
    <section>
      <h2>1. Implementasi React.memo</h2>
      <div className="controls">
        <button onClick={() => setParentData(`Data Induk ${Date.now()}`)}>
          Ubah Data Induk
        </button>
        <button onClick={() => setChildData(`Data Anak ${Date.now()}`)}>
          Ubah Data Anak
        </button>
      </div>
      <p>Data Induk: {parentData}</p>
      <MemoChild data={childData} onParentClick={handleParentClick} />
      <p className="note">
        <strong>Catatan:</strong> Lihat konsol. "MemoChild" hanya di-render saat props `data` berubah.
      </p>
    </section>
  );
};

export default MemoParent;  