import './App.css'
import Counter from './component/count'
import FromData from './component/FromData'
import TodoList from './component/ToDoList'
import UserProfile from './component/UserProfile'

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
