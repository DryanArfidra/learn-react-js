import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data.slice(0, 20));
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading products...</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Produk Kami</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map(product => (
          <Link key={product.id} to={`/products/${product.id}`} className="group">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 transition-transform">
              <img 
                src={product.images[0]} 
                alt={product.title} 
                className="w-full h-36 object-contain mb-3 rounded"
              />
              <h3 className="text-sm font-semibold mb-2 truncate group-hover:text-blue-600">{product.title}</h3>
              <p className="text-red-500 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;