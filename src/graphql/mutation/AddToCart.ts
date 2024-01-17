import { gql } from "@apollo/client";

export const INIT_CART_TOKEN = gql `mutation CheckoutCreate {
  checkoutCreate(
    input: {
      channel: "default-channel"
      lines: []
    }
  ) {
    checkout {
      token
    }
    errors {
      field
      code
    }
  }
}`

export const ADD_TO_CART  = gql `mutation ProductAddVariantToCart($checkoutToken: UUID!, $variantId: ID!) {
    checkoutLinesAdd(
      token: $checkoutToken
      lines: [{ quantity: 1, variantId: $variantId }]
    ) {
      checkout {
        id
        lines {
          id
          quantity
          variant {
            name
            product {
              name
            }
          }
        }
      }
      errors {
        message
      }
    }
  }`

  export const REMOVE_FROM_CART = gql `mutation CheckoutRemoveProduct($checkoutToken: UUID!, $lineId: ID!) {
    checkoutLineDelete(token: $checkoutToken, lineId: $lineId) {
      checkout {
        ...CheckoutFragment
      }
      errors {
        message
      }
    }
  }`