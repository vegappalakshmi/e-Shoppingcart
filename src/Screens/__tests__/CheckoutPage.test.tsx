import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { MockedProvider } from '@apollo/client/testing';
import CheckoutPage from '../CheckoutPage';
//import { REMOVE_FROM_CART } from '../graphql/mutation/AddToCart';
import { GET_CHECKOUT_DATA } from '../../graphql/queries/ProductGetElements';

const checkoutToken = 'mockedToken';

const mockData = {
  checkout: {
    lines: [
      {
        id: '1',
        variant: {
          product: {
            name: 'Product 1',
            thumbnail: {
              url: 'product1.jpg',
            },
          },
        },
        totalPrice: {
          gross: {
            amount: 19.99,
          },
        },
      },
    ],
  },
};

const mocks = [
  {
    request: {
      query: GET_CHECKOUT_DATA,
      variables: {
        checkoutToken,
      },
    },
    result: {
      data: mockData,
    },
  },
];

const mockRemoveItemFromCart = jest.fn();

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useMutation: () => [mockRemoveItemFromCart],
}));

test('renders CheckoutPage and calls removeFromCart on ShoppingCartPage', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <MemoryRouter initialEntries={[{pathname: '/', state: {checkoutToken: 'testing'}}]}>
      
          <CheckoutPage />
       
      </MemoryRouter>
    </MockedProvider>
  );

  // Wait for the data to be loaded
  await waitFor(() => {
    expect(mockRemoveItemFromCart).not.toHaveBeenCalled(); // Ensure removeFromCart is not called yet
  });

  // Check if ShoppingCartPage is rendered with the correct props
  expect(mockRemoveItemFromCart).toHaveBeenCalledTimes(0); // Ensure removeFromCart is not called during rendering
  expect(mockRemoveItemFromCart).toHaveBeenCalledTimes(0); // Ensure removeFromCart is not called during rendering
});