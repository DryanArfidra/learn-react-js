import './App.css'
import Counter from './components/Count'
import FromData from './components/FromData'
import TodoList from './components/ToDoList'
import UserProfile from './components/UserProfile'

function App() {

  return (
    <>
      <div className="card">
        <Counter/>
        <br />
        <UserProfile/>
        <br />
        <FromData/>
        <br />
        <TodoList/>

      </div> 
    </>
  )
}

export default App
