import React from 'react';
import { useCart } from '../contexts/CartContext';

const products = [
  { id: 1, name: 'Buku React', price: 150000 },
  { id: 2, name: 'Mouse Gaming', price: 450000 },
  { id: 3, name: 'Keyboard Mechanical', price: 850000 },
];

const ProductList = () => {
  const { addItem } = useCart();

  return (
    <div>
      <h2>Daftar Produk</h2>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {products.map(product => (
          <div key={product.id} className="card">
            <h4>{product.name}</h4>
            <p>Rp {product.price.toLocaleString('id-ID')}</p>
            <button onClick={() => addItem(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;