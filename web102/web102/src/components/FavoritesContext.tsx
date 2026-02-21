// FavoritesContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FavoriteItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

interface FavoritesContextType {
  favoriteItems: FavoriteItem[];
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState<FavoriteItem[]>([]);

  const addToFavorites = (item: FavoriteItem) => {
    setFavoriteItems((prevItems) => {
      if (!prevItems.find(favItem => favItem.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromFavorites = (id: string) => {
    setFavoriteItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <FavoritesContext.Provider value={{ favoriteItems, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};