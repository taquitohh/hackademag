// Favorites.tsx
import React from 'react';
import { useFavorites } from './components/FavoritesContext';
import './Favorites.css';
import Navbar from './components/navbar';

const Favorites: React.FC = () => {
  const { favoriteItems, removeFromFavorites } = useFavorites();

  return (
    <>
      <Navbar />
      <div className="favorites-page">
        <h1>Your Favorites</h1>
        <div className="favorite-items">
          {favoriteItems.map(item => (
            <div key={item.id} className="favorite-item">
              <img src={item.imageUrl} alt={item.name} className="favorite-item-image" />
              <div className="favorite-item-details">
                <p>{item.name}</p>
                <p>Price: {item.price} RON</p>
                <button onClick={() => removeFromFavorites(item.id)}>Remove from Favorites</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;