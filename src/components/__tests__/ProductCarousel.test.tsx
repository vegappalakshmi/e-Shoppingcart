// ProductCarousel.test.tsx

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProductCarousel from '../ProductCarousel';

// Mock addToCart function
const mockAddToCart = jest.fn();

const testProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 19.99,
    image1: 'product1.jpg',
    checkoutId: 'checkout-1',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 29.99,
    image1: 'product2.jpg',
    checkoutId: 'checkout-2',
  },
];

test('renders product carousel with correct products', () => {
  render(<ProductCarousel products={testProducts} addToCart={mockAddToCart} />);

  // Check if each product is rendered within the carousel
  testProducts.forEach((product) => {
    expect(screen.getByAltText(product.name)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
  });
});

test('calls addToCart when "Add to Cart" button is clicked', () => {
  render(<ProductCarousel products={testProducts} addToCart={mockAddToCart} />);

  // Click the "Add to Cart" button for each product
  testProducts.forEach((product) => {
    const addToCartButton = screen.getByText('Add to Cart', { selector: `button[data-testid="add-to-cart-${product.id}"]` });
    fireEvent.click(addToCartButton);

    // Check if addToCart is called with the correct parameters
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});