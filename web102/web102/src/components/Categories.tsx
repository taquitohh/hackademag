import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

interface Category {
  label: string;
  icon: string;
}

const categories: Category[] = [
  { label: 'Multiplayer', icon: 'multiplayer-icon' },
  { label: 'RPG', icon: 'rpg-icon' },
  { label: 'Shooter', icon: 'shooter-icon' },
  { label: 'Open World', icon: 'openworld-icon' },
  { label: 'Story', icon: 'story-icon' },
  { label: 'PlayStation', icon: 'playstation-icon' },
  { label: 'Xbox', icon: 'xbox-icon' },
  { label: 'PC', icon: 'pc-icon' },
  { label: 'Nintendo', icon: 'nintendo-icon' },
];

const Categories: React.FC = () => {

  return (
    <div className="categories">
      <p>Categories</p>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            {/* <div className={`category-icon ${category.icon}`}></div> */}
            <div className="category-info">
              <span className="category-label">{category.label}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/products"><button className="view_products" >
        View products
      </button></Link>
    </div>
  );
};

export default Categories;
