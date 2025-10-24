// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
import productsReducer from '../features/usersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
}); 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;