import { useState } from 'react';

function ProductListWithoutMemo({ products, searchTerm }) {
  const [sortBy, setSortBy] = useState('name');
  
  const filteredAndSortedProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'price') return a.price - b.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <h3>Daftar Produk</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Urutkan berdasarkan Nama</option>
        <option value="price">Urutkan berdasarkan Harga</option>
        <option value="rating">Urutkan berdasarkan Rating</option>
      </select>
      
      <div>
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <p>Rating: {product.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
);
}
export default ProductListWithoutMemo;
