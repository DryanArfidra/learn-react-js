import React, { useReducer } from 'react';

const initialState = 0;

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState; 
    default:
      return state;
  }
};

const CounterWithReducer = () => {
  const [count, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div >
      
      <h3>Nilai: {count}</h3>
      <div>
        <button onClick={() => dispatch({ type: 'decrement' })}>Kurang</button>

        <button onClick={() => dispatch({ type: 'reset' })} style={{ margin: '0 10px' }}>Reset</button>

        <button onClick={() => dispatch({ type: 'increment' })}>Tambah</button>
        
      </div>
    </div>
  );
};

export default CounterWithReducer;