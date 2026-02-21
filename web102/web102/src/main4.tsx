// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index2.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; // Import CartProvider

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider> {/* Wrap with CartProvider */}
        <App />
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
