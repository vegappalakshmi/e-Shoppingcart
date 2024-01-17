import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingCartPage from '../ShoppingCartPage';

const testCartItems = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
    image1: 'product1.jpg',
    count: 2,
  },
  {
    id: '2',
    name: 'Product 2',
    price: 29.99,
    image1: 'product2.jpg',
    count: 1,
  },
];

// Mock removeFromCart function
const mockRemoveFromCart = jest.fn();

test('renders shopping cart with correct items and handles removal', () => {
  render(<ShoppingCartPage cartItems={testCartItems} removeFromCart={mockRemoveFromCart} />);

  // Check if each cart item is rendered correctly
  testCartItems.forEach((item) => {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${item.price}`)).toBeInTheDocument();
  });

  // Click the "Remove" button for each cart item
  testCartItems.forEach((item) => {
    const removeButton = screen.getByText('Remove', { selector: `button[data-testid="remove-${item.id}"]` });
    fireEvent.click(removeButton);

    // Check if removeFromCart is called with the correct ID
    expect(mockRemoveFromCart).toHaveBeenCalledWith(item.id);
  });

  // Check if "Cart is empty" is displayed when there are no items
  render(<ShoppingCartPage cartItems={[]} removeFromCart={mockRemoveFromCart} />);
  expect(screen.getByText('Cart is empty')).toBeInTheDocument();
});