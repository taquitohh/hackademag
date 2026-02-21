// CartPage.tsx
import React from 'react';
import { useCart } from './components/CartContext';
import './CartPage.css';

const CartPage: React.FC = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>Price: {item.price} RON</p>
              <div className="quantity-controls">
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="total-cost">
        <h2>Total: {totalCost.toFixed(2)} RON</h2>
      </div>
      <button className="check_out">CHECK OUT</button>
    </div>
  );
};

export default CartPage;