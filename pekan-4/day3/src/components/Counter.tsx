import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../app/store'
import { increment, decrement, incrementByAmount, reset } from '../features/counter/counterSlice'
import { useState } from 'react'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Counter</h2>
      <div className="text-4xl font-bold text-center text-blue-600 mb-6">
        {count}
      </div>
      <div className="flex gap-2 justify-center mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Reset
        </button>
      </div>
      <div className="flex gap-2">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Amount"
        />
        <button
          onClick={() => dispatch(incrementByAmount(amount))}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Amount
        </button>
      </div>
    </div>
  )
}