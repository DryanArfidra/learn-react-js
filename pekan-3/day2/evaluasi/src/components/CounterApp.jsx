import React from 'react';
import useCounterWithToggle from '../hooks/useCounterWithToggle';

function CounterApp() {
  const { count, increment, decrement, isToggled, toggle } = useCounterWithToggle(5);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={decrement}>Kurangi</button>
      <button onClick={increment}>Tambah</button>
      <hr style={{margin: '1rem 0'}}/>
      <p>Status Toggle: {isToggled ? 'AKTIF' : 'NONAKTIF'}</p>
      <button onClick={toggle}>Ubah Status</button>
    </div>
  );
}

export default CounterApp;