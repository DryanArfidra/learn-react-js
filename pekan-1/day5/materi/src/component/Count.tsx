import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const Decrement = () => {
    // if (count === 0) return;
    setCount(prevCount => prevCount - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl mt-20 shadow-md">
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2 ">
          React Counter
        </h1>

        <div className="text-center mb-8">
          <p className="text-6xl font-bold text-indigo-600">{count}</p>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            -
          </button>

          <button
            onClick={Reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg "
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;