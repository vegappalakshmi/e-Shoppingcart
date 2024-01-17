import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductListScreen from "../Screens/ProductListScreen";
import CheckoutPage from "../Screens/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListScreen />,
  },
  {
    path: "/Checkout",
    element: <CheckoutPage />,
  },
]);