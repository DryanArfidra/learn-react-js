import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    todos: todosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch