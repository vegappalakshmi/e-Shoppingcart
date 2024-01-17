// ShoppingCartPage.tsx

import React from 'react';
import { CartItem } from '../types';


interface ShoppingCartPageProps {
  cartItems: CartItem[];
  removeFromCart: (id: string) => void;
}

const ShoppingCartPage: React.FC<ShoppingCartPageProps> = ({ cartItems, removeFromCart }) => {

  const handleRemoveClick = (item: CartItem) => {
    removeFromCart(item.id);
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      {/* Check if cartItems is not empty before rendering */}
      <div style={{ display: 'flex' }}>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="count">{item.count}</span>
              <img src={item.image1} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <h3>Price: ${item.price}</h3>
                <button 
                data-testid={`remove-${item.id}`}
                onClick={() => handleRemoveClick(item)}>Remove</button>
                {/* Display other details of the cart item */}
              </div>
            </div>
          ))
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCartPage;
