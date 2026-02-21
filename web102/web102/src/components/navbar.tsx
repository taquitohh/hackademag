// NavBar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useFilter } from './FilterContext';
import Product from './product';
import { useCart } from './CartContext';

const NavBar: React.FC = () => {
  const { setFilterTag, setSearchQuery, searchQuery } = useFilter();
  const [dropdownVisible, setDropdownVisible] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>(searchQuery);
  const navigate = useNavigate();
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    const calculateTotalCost = () => {
      const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotalCost(total);
    };

    calculateTotalCost();
  }, [cartItems]);

  const handleNavigation = (filterTag: string) => {
    setFilterTag(filterTag);
    navigate('/products');
  };

  const handleMouseEnter = (menu: string) => {
    setDropdownVisible(menu);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchQuery(inputValue);
      navigate('/products');
    }
  };

  return (
    <nav>
      <ul>
        <div className='div_logo'>
          <Link to="/" className='home'>
            <img src="png/logo-no-background.png" className="logo" alt="logo" />
          </Link>
        </div>
        <div className='div_input'>
          <input 
            className="search" 
            type='text' 
            placeholder='Search' 
            value={inputValue}
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="main-menu">
          <li><Link to="/">Home</Link></li>
          <li
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/products">Products</Link>
            {dropdownVisible === 'products' && (
              <ul className="dropdown">
                <li className='li_type'>
                  <a href="#">Type</a>
                  <ul className="dropdown1">
                    <li><a onClick={() => handleNavigation('multiplayer')}>Multiplayer</a></li>
                    <li><a onClick={() => handleNavigation('rpg')}>RPG</a></li>
                    <li><a onClick={() => handleNavigation('shooter')}>Shooter</a></li>
                    <li><a onClick={() => handleNavigation('openworld')}>Open World</a></li>
                    <li><a onClick={() => handleNavigation('story')}>Story</a></li>
                  </ul>
                </li>
                <li className='li_price'>
                  <a href="#">Price</a>
                  <ul className="dropdown2">
                    <li><a onClick={() => handleNavigation('0-10')}>0 - 10</a></li>
                    <li><a onClick={() => handleNavigation('10-50')}>10 - 50</a></li>
                    <li><a onClick={() => handleNavigation('50-100')}>50 - 100</a></li>
                    <li><a onClick={() => handleNavigation('100-200')}>100 - 200</a></li>
                    <li><a onClick={() => handleNavigation('200-500')}>200 - 500</a></li>
                  </ul>
                </li>
                <li className='li_platform'>
                  <a href="#">Platform</a>
                  <ul className="dropdown3">
                    <li><a onClick={() => handleNavigation('PlayStation')}>PlayStation</a></li>
                    <li><a onClick={() => handleNavigation('Xbox')}>Xbox</a></li>
                    <li><a onClick={() => handleNavigation('PC')}>PC</a></li>
                    <li><a onClick={() => handleNavigation('Nintendo')}>Nintendo</a></li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li
            className="cart-link"
            onMouseEnter={() => handleMouseEnter('cart')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/cart">My Cart</Link>
            {cartItems.length > 0 && <div className="red-dot"></div>}
            {dropdownVisible === 'cart' && (
              <ul className="dropdown" style={{maxHeight: "500px", width:"321px", overflowX: "hidden", overflowY: "auto", transform: "translateX(-200px)"}}>
                
                {cartItems.map(item => (
                  <li key={item.id} style={{left: "200px"}}>
                    <Product 
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      imageUrl={item.imageUrl}
                      quantity={item.quantity}
                    />
                    <div className="quantity-controls">
                      <button onClick={() => increaseQuantity(item.id)}><h4>+</h4></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => decreaseQuantity(item.id)}><h4>-</h4></button>
                    </div>
                  </li>
                  
                ))}
                <li className="total-cost">
                  <strong>Total: {totalCost.toFixed(2)} RON</strong>
                  <button onClick={() => navigate('/cart')}>View Cart</button>
                </li>
              </ul>
            )}
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;