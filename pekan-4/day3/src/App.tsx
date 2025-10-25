import Counter from './components/Counter'
import UserList from './components/UserList'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Redux Toolkit Evaluation
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Counter />
            <TodoList />
          </div>
          
          <div>
            <UserList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App