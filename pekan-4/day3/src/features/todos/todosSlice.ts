import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [
    { id: 1, text: 'Belajar Redux Toolkit', completed: false },
    { id: 2, text: 'Setup project dengan Vite', completed: true },
    { id: 3, text: 'Implementasi Async Thunk', completed: false },
  ],
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      }
      state.todos.push(newTodo)
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find(todo => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.text = action.payload.text
      }
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo, editTodo } = todosSlice.actions
export default todosSlice.reducer