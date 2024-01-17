// Product.tsx

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image1: string;
  checkoutId: string,
  addToCart: (product: { id: number; name: string; price: number; image1: string, checkoutId: string }) => void;
}

const Product: React.FC<ProductProps> = ({checkoutId, id, name, price, image1, addToCart }) => {
    const handleAddToCart = () => {
        addToCart({ id, name, price, image1, checkoutId });
      };

  return (
    <div className="product">
      {id === 1 ? (
        <img className="product-image" src={image1} alt={name} />
      ) : (
        <img className="product-image" src={image1 || ''} alt={name} />
      )}
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}
      data-testid={`add-to-cart-${id}`}
      >
        <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
      </button>
    </div>
  );
};

export default Product;
