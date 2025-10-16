import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <div className="no-results">Produk tidak ditemukan.</div>;
    }

    return (
        <div className="product-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;