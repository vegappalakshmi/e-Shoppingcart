import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../Product';

// Mock addToCart function
const mockAddToCart = jest.fn();

const testProduct = {
  id: 1,
  name: 'Test Product',
  price: 19.99,
  image1: 'test-image.jpg',
  checkoutId: 'checkout-123',
};

test('renders product details and calls addToCart on button click', () => {
  render(<Product {...testProduct} addToCart={mockAddToCart} />);

  // Check if product details are rendered correctly
  expect(screen.getByAltText(testProduct.name)).toBeInTheDocument();
  expect(screen.getByText(`Price: $${testProduct.price}`)).toBeInTheDocument();

  // Click the "Add to Cart" button
  fireEvent.click(screen.getByText('Add to Cart'));

  // Check if addToCart is called with the correct parameters
  expect(mockAddToCart).toHaveBeenCalledWith({
    id: testProduct.id,
    name: testProduct.name,
    price: testProduct.price,
    image1: testProduct.image1,
    checkoutId: testProduct.checkoutId,
  });
});