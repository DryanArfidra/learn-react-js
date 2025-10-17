import React from 'react';
import { memo } from 'react';

const MemoChild = memo(({ data, onParentClick }) => {
  console.log('🟣 MemoChild di-render');
  return (
    <div className="demo-box">
      <h3>Komponen Anak (dengan React.memo)</h3>
      <p>Data dari Anak: {data}</p>
      <button onClick={onParentClick}>Ubah Data Induk</button>
    </div>
  );
});

export default MemoChild;