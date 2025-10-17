import React, { useMemo } from 'react';

const ExpensiveCalculation = ({ number, multiplier }) => {
  console.log('🔴 Melakukan perhitungan mahal...');
  
  const result = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < number * 1000000; i++) {
      sum += i;
    }
    return sum * multiplier;
  }, [number, multiplier]);
  
  return (
    <div className="demo-box">
      <h3>Hasil Perhitungan Mahal (dengan useMemo)</h3>
      <p>Hasil: {result.toLocaleString()}</p>
      <p>Input: {number} × {multiplier}</p>
    </div>
  );
};

export default ExpensiveCalculation;