import React from "react";
import {
    createBrowserRouter,
  } from "react-router-dom";
import PublicLayout from "../Components/organisms/layouts/Public.jsx";
import ErrorPage from "../pages/error-page.jsx";
import Home from "../pages/home/home.jsx";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "inicio",
          element: <Home />,
        },
      ],
    },
  ]);

  export default router; 