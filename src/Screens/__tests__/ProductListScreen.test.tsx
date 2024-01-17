import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ProductListScreen from '../ProductListScreen';
import { GET_DATA } from '../../graphql/queries/ProductGetElements';

const mockData = {
  products: {
    edges: [
      {
        node: {
          id: '1',
          name: 'Product 1',
          pricing: {
            priceRange: {
              stop: {
                gross: {
                  amount: 19.99,
                },
              },
            },
          },
          thumbnail: {
            url: 'product1.jpg',
          },
          variants: [
            {
              id: 'variantId1',
            },
          ],
        },
      },
      // Add more mock data as needed
    ],
  },
};

const mocks = [
  {
    request: {
      query: GET_DATA,
    },
    result: {
      data: mockData,
    },
  },
];

const mockMutations = {
  INIT_CART_TOKEN: jest.fn(),
  ADD_TO_CART: jest.fn(),
};
const mockedUsedNavigate = jest.fn();
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
 // useQuery: jest.fn(() => ({ data: mockData })),
 useMutation: () => [mockMutations.ADD_TO_CART, mockMutations.INIT_CART_TOKEN],
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
   useNavigate: () => mockedUsedNavigate,
 }));

test('renders ProductListScreen and adds items to the cart', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ProductListScreen />
    </MockedProvider>
  );

  // Wait for the data to be loaded
  await waitFor(() => {
    expect(document.querySelector('button')).toBeInTheDocument(); // Check if the component has rendered the button (modify based on your actual implementation)
  });

  // Check if the "Add to Cart" button works
  const addToCartButton = screen.getByText('Add to Cart');
  fireEvent.click(addToCartButton);

});