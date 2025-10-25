import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  name: string
  email: string
  phone: string
}

interface UsersState {
  users: User[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
}

// Async thunk untuk fetch users dari API
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data as User[]
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { addUser, removeUser } = usersSlice.actions
export default usersSlice.reducer