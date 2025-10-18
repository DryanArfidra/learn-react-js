import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Product not found');
        }
        return response.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product detail:", error);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading product details...</div>;
  }

  if (!product) {
    return <div className="p-5 text-red-500 font-bold">Product not found.</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
      <img 
        src={product.images[0]} 
        alt={product.title} 
        className="w-80 h-80 object-contain mb-6 mx-auto border rounded"
      />
      <p className="text-2xl font-semibold text-red-500 mb-4">Harga: ${product.price}</p>
      <p className="text-gray-700 mb-4"><span className="font-bold">Deskripsi:</span> {product.description}</p>
      <p className="text-gray-700"><span className="font-bold">Kategori:</span> {product.category?.name || 'N/A'}</p>
    </div>
  );
};

export default ProductDetail;