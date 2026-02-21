import React from 'react';
import './product.css'; // Assuming you have CSS for styling

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Product: React.FC<ProductProps> = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} className="product-img" />
      <div className="product-details">
        <p className="product-title">{name}</p>
        <p className="product-price">{price} RON</p>
        <p className="product-quantity">Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default Product;
