import React from 'react';
import { useCart } from '../context/CartContext';

const CartBadge = () => {
  const { state } = useCart();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <span>🛒</span>
      {state.count > 0 && (
        <span className="cart-badge">{state.count}</span>
      )}
    </div>
  );
};

export default CartBadge;