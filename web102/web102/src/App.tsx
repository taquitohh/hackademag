// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './products';
import { FilterProvider } from './components/FilterContext';
import Home from './homee';
import Favorites from './Favorites';
import CartPage from './CartPage'; // Import the CartPage component

const App: React.FC = () => {
  return (
    <FilterProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<CartPage />} /> {/* Add this route */}
        </Routes>
      </Router>
    </FilterProvider>
  );
};

export default App;
