import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import CartBadge from '../components/CartBadge';
import { useTheme } from '../context/ThemeContext';
import useProducts from '../hooks/useProducts'; // Import useProducts

const Home = () => {
  // Pemanggilan hook ini tidak berubah
  const { products, loading, error } = useProducts();

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { dispatch } = useTheme();

  // ... sisanya kode tetap sama
  useEffect(() => {
    let result = products;
    if (searchTerm) {
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory !== 'All') {
      result = result.filter(product =>
        product.category === selectedCategory.toLowerCase()
      );
    }
    setFilteredProducts(result);
  }, [products, searchTerm, selectedCategory]);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Product Catalog:</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <CartBadge />
          <button className="theme-toggle" onClick={toggleTheme}>
            Ganti Tema
          </button>
        </div>
      </header>

      <div className="filters">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">Gagal memuat data: {error}</div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;