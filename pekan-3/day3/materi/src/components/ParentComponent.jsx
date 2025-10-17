import React, { useState } from 'react';
import UnoptimizedChild from './UnoptimizedChild';
import { OptimizedChild } from './OptimizedChild';
function ParentComponent() {
  const [parentCount, setParentCount] = useState(0);
  const [otherState, setOtherState] = useState(0); // State lain yang tidak diteruskan ke anak

  return (
    <div>
      <h2>Optimasi dengan React.memo</h2>
      <p>Parent Count: {parentCount}</p>
      <p>Other State: {otherState}</p>
      <button onClick={() => setParentCount(parentCount + 1)}>
        Tambah Parent Count
      </button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Tambah Other State (akan me-render ulang anak tanpa memo)
      </button>

      <hr />

      {/* UnoptimizedChild akan selalu di-render ulang saat ParentComponent di-render */}
      <UnoptimizedChild count={parentCount} />

      {/* OptimizedChild hanya akan di-render ulang jika prop 'count' berubah */}
      <OptimizedChild count={parentCount} />
    </div>
  );
}

export default ParentComponent;