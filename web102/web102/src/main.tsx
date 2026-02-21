import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {CartProvider } from './components/CartContext.tsx'
import { FavoritesProvider } from './components/FavoritesContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <FavoritesProvider> 
        <App />
      </FavoritesProvider>
    </CartProvider>
  </React.StrictMode>
);