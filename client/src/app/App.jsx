import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import Regsiter from "../features/shopnest/ui/pages/Regsiter";
import Login from "../features/shopnest/ui/pages/Login";
import MainLayout from "../layouts/MainLayout";
import Home from "../features/shopnest/ui/pages/Home";
import About from "../features/shopnest/ui/pages/About";
import Products from "../features/shopnest/ui/pages/Products";
import AddProduct from "../features/shopnest/ui/pages/AddProduct";
import EditProduct from "../features/shopnest/ui/pages/EditProduct";
import Profile from "../features/shopnest/ui/pages/Profile";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Regsiter />,
        },
        {
          path: "/auth/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "addProduct",
          element: <AddProduct />,
        },
        {
          path: "editProduct",
          element: <EditProduct />
        },
        {
          path: "profile",
          element: <Profile />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
