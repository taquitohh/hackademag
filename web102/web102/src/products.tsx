// Products.tsx
import React, { useEffect, useState } from 'react';
import './products.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import GameList from './GameList';
import { useFilter } from './components/FilterContext';

const Products: React.FC = () => {
  const { filterTag, searchQuery } = useFilter();
  const [currentFilterTag, setCurrentFilterTag] = useState<string | null>(null);

  useEffect(() => {
    setCurrentFilterTag(filterTag);
  }, [filterTag]);

  const handleReset = () => {
    setCurrentFilterTag(null);
  };

  return (
    <>
      <Navbar />
      <div className='top_info'>
        <p>Store</p>
      </div>
      <div className='corp'>
        <div className='menu'>
          <div className='menu-top'>
            <p className='menu-title'>Filter</p>
            <button onClick={handleReset}>Reset</button>
          </div>
          <div className='menu-box'>
            <p className='menu-sec-title'>Type</p>
            <div className='buttons'>
              <button onClick={() => setCurrentFilterTag('#multiplayer')}>Multiplayer</button>
              <button onClick={() => setCurrentFilterTag('#rpg')}>RPG</button>
              <button onClick={() => setCurrentFilterTag('#shooter')}>Shooter</button>
              <button onClick={() => setCurrentFilterTag('#openworld')}>Open World</button>
              <button onClick={() => setCurrentFilterTag('#story')}>Story</button>
            </div>
          </div>
          <div className='menu-box'>
            <p className='menu-sec-title'>Price</p>
            <div className='buttons'>
              <button onClick={() => setCurrentFilterTag('#0-10')}>0 - 10</button>
              <button onClick={() => setCurrentFilterTag('#10-50')}>10 - 50</button>
              <button onClick={() => setCurrentFilterTag('#50-100')}>50 - 100</button>
              <button onClick={() => setCurrentFilterTag('#100-200')}>100 - 200</button>
              <button onClick={() => setCurrentFilterTag('#200-500')}>200 - 500</button>
            </div>
          </div>
          <div className='menu-box'>
            <p className='menu-sec-title'>Platform</p>
            <div className='buttons'>
              <button onClick={() => setCurrentFilterTag('#PlayStation')}>PlayStation</button>
              <button onClick={() => setCurrentFilterTag('#Xbox')}>Xbox</button>
              <button onClick={() => setCurrentFilterTag('#PC')}>PC</button>
              <button onClick={() => setCurrentFilterTag('#Nintendo')}>Nintendo</button>
            </div>
          </div>
        </div>
        <div className='products'>
          <GameList filterTag={currentFilterTag} searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;