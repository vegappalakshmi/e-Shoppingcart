import { gql } from "@apollo/client";

export const GET_DATA  = gql `query FetchProducts {
  products(first: 10 , channel: "default-channel") {
    edges {
      node {
        id,
        name,
        variants{
          id
        },
          pricing {
          priceRange {
            start {
              gross {
                amount
              }
            }
            stop {
              gross {
                amount
              }
            }
          }
          }
        thumbnail {
          url
        }
      }
    }
  
  }
}`

export const GET_CHECKOUT_DATA = gql `query CheckoutFetchByToken($checkoutToken: UUID!) {
  checkout(token: $checkoutToken) {
    id
    email
    lines {
      id
      totalPrice {
        gross {
          amount
          currency
        }
      }
      variant {
        product {
          id
          name
          slug
          thumbnail {
            url
            alt
          }
        }
        pricing {
          price {
            gross {
              amount
              currency
            }
          }
        }
        name
      }
    }
    totalPrice {
      gross {
        amount
        currency
      }
    }
  }
}`