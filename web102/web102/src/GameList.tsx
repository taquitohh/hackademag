// GameList.tsx
import React from 'react';
import gamesData from './games.json';
import './GameList.css';
import { useCart } from './components/CartContext';
import { useFavorites } from './components/FavoritesContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

interface Game {
  id: string;
  title: string;
  price: number;
  url: string;
  alt: string;
}

interface GameListProps {
  filterTag: string | null;
  searchQuery: string;
}

const GameList: React.FC<GameListProps> = ({ filterTag, searchQuery }) => {
  const games: Game[] = gamesData.games;
  const { addToCart } = useCart();
  const { favoriteItems, addToFavorites, removeFromFavorites } = useFavorites();

  const filteredGames = games.filter(game => {
    const matchesFilterTag = filterTag ? game.id.includes(filterTag) : true;
    const matchesSearchQuery = game.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilterTag && matchesSearchQuery;
  });

  const handleAddToCart = (game: Game) => {
    const cartItem = {
      id: game.id,
      name: game.title,
      price: game.price,
      imageUrl: game.url,
      quantity: 1,
    };
    addToCart(cartItem);
    console.log(`Added game with ID ${game.id} to cart`);
  };

  const isFavorite = (gameId: string) => {
    return favoriteItems.some(item => item.id === gameId);
  };

  const toggleFavorite = (game: Game) => {
    if (isFavorite(game.id)) {
      removeFromFavorites(game.id);
      console.log(`Removed game with ID ${game.id} from favorites`);
    } else {
      const favoriteItem = {
        id: game.id,
        name: game.title,
        price: game.price,
        imageUrl: game.url,
      };
      addToFavorites(favoriteItem);
      console.log(`Added game with ID ${game.id} to favorites`);
    }
  };

  return (
    <div className="product-list">
      {filteredGames.map(game => (
        <div id={game.id} className="product-card" key={game.url}>
          <img src={game.url} alt={game.alt} className="product-image" />
          <p className="product-title">{game.title}</p>
          <div className="card-bottom">
            <p className="product-price">{game.price} RON</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(game)}>Add to Cart</button>
            <FontAwesomeIcon 
              icon={isFavorite(game.id) ? solidHeart : regularHeart} 
              className={`add-to-favorite ${isFavorite(game.id) ? 'favorite' : ''}`} 
              onClick={() => toggleFavorite(game)} 
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;