import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartDisplay = () => {
  const { items, total, removeItem, clearCart } = useCart();

  return (
    <div>
      <h2>Keranjang Belanja</h2>
      {items.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          <ul>
            {items.map(item => (
              <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.name} (x{item.quantity})</span>
                <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                <button onClick={() => removeItem(item.id)}>Hapus</button>
              </li>
            ))}
          </ul>
          <hr />
          <h3>Total: Rp {total.toLocaleString('id-ID')}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default CartDisplay;