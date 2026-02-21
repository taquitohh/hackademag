import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index2.css';
import Products from './products';
import { FilterProvider } from './components/FilterContext';


ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
