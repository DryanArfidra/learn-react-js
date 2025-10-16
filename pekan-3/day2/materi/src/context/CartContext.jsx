import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

const initialState = {
  items: [],
  count: 0
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};