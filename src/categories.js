import React, { useState, useEffect } from 'react';
import './product.css';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories from the fake store API
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const fetchProductsByCategory = (category) => {
    // Fetch products by category from the fake store API
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(`Error fetching products for ${category}:`, error));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    fetchProductsByCategory(category);
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={selectedCategory === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
