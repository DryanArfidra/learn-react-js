import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../app/store'
import { addTodo, toggleTodo, deleteTodo, editTodo } from '../features/todos/todosSlice'

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState('')

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id))
  }

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const handleEditTodo = (id: number, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  const handleSaveEdit = () => {
    if (editingId !== null && editText.trim()) {
      dispatch(editTodo({ id: editingId, text: editText }))
      setEditingId(null)
      setEditText('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Todo List</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
          className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new todo..."
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 p-3 bg-gray-50 rounded hover:bg-gray-100 transition"
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
                onBlur={handleSaveEdit}
                className="flex-1 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            ) : (
              <span
                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
                onDoubleClick={() => handleEditTodo(todo.id, todo.text)}
              >
                {todo.text}
              </span>
            )}
            
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}