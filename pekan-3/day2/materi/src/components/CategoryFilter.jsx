import React from 'react';

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'All',
    'Electronics',
    'Jewelery',
    "Men's Clothing",
    "Women's Clothing"
  ];

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <select
      className="category-select"
      value={selectedCategory}
      onChange={handleChange}
    >
      {categories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;