import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductListScreen from "./Screens/ProductListScreen";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route";

const App: React.FC = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
