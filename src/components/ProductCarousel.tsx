// ProductCarousel.tsx

import React from 'react';
import Product from './Product';
import './styles.css';

interface ProductData {
    id: number;
    name: string;
    price: number;
    image1: string;
    checkoutId?: string;
  }

interface ProductCarouselProps {
  products: ProductData[];
  addToCart?: (product: ProductData) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, addToCart }) => {

  return (
    <div className="product-carousel"> {/* Add a parent container with the appropriate class */}
    {products.map((product  : any) => (
       <Product key={product.id} {...product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductCarousel;
