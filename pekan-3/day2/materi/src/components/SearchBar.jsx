import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Cari produk..."
      className="search-input"
      value={searchTerm}
      onChange={handleChange}
    />
  );
};

export default SearchBar;