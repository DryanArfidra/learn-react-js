import React, { useState, useMemo } from 'react';
import ProductList from './components/ProductList';
import ParentComponent from './components/ParentComponent';
import ProductListWithoutMemo from './components/ProductListWithoutMemo';
const sampleProducts = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, rating: 4.5 },
  { id: 2, name: 'Smartphone', price: 5000000, rating: 4.2 },
  { id: 3, name: 'Headphone', price: 800000, rating: 4.8 },
  { id: 4, name: 'Mouse Wireless', price: 200000, rating: 4.0 },
  { id: 5, name: 'Keyboard Mechanical', price: 1200000, rating: 4.6 },
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [otherState, setOtherState] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>React.Memo</h2>
      <ParentComponent  />
      <h2>Contoh useMemo - Optimasi Perhitungan Mahal</h2>
      
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
      />
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba ubah state lain di atas dan lihat di console. 
        Perhitungan filter/sort hanya akan dijalankan ulang jika search term atau sort berubah!
      </p>
      
      <ProductList products={sampleProducts} searchTerm={searchTerm} />
    </div> 
  );
}

export default App;