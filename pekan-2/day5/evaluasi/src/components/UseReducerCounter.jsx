import React, { useReducer } from 'react';

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      return state;
  }
};

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
  return (
    <div style={{ padding: '20px', border: '1px solid #aaa', margin: '20px 0' }}>
      <h2>Counter dengan useReducer</h2>
      <p>Nilai counter: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Kurang</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;