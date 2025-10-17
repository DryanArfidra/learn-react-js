import React from 'react';
export const OptimizedChild = React.memo(function OptimizedChild({ count }) {
  console.log('OptimizedChild di-render');
  return <p>Count (Optimized): {count}</p>;
});