import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: product
    });
  };

  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.title} 
        className="product-image"
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <button 
          className="add-to-cart-btn"
          onClick={addToCart}
        >
          Tambahkan ke Keranjang
        </button>
      </div>
    </div>
  );
};

export default ProductCard;