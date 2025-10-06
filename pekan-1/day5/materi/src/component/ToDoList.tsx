import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Hooks', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]); // Tambahkan todo baru
    setNewTodoText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // Hapus todo
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Daftar Tugas</h2>
  
  <form onSubmit={addTodo} className="flex gap-2 mb-6">
    <input
      type="text"
      value={newTodoText}
      onChange={(e) => setNewTodoText(e.target.value)}
      placeholder="Tambahkan tugas baru..."
      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button 
      type="submit" 
      className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
    >
      Tambah
    </button>
  </form>
  
  <ul className="space-y-2">
    {todos.map(todo => (
      <li 
        key={todo.id} 
        className={`flex justify-between items-center p-3 bg-gray-50 rounded-md ${todo.completed ? 'line-through' : ''}`}
      >
        <span 
          onClick={() => toggleTodo(todo.id)} 
          className="cursor-pointer flex-grow"
        >
          {todo.text}
        </span>
        <button 
          onClick={() => deleteTodo(todo.id)} 
          className="ml-4 text-red-500 hover:text-red-700 font-semibold"
        >
          Hapus
        </button>
      </li>
    ))}
  </ul>
</div>
  );
}

export default TodoList;