import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PublicLayout from "../Components/organisms/layouts/Public.jsx";
import ErrorPage from "../pages/error-page.jsx";
import Home from "../pages/home/home.jsx";
import Portafolio from "../pages/portafolio/Portafolio.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/inicio" />,
  },
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "inicio",
        element: <Home />,
      },
      {
        path: "portafolio",
        element: <Portafolio />,
      },
    ],
  },
]);

export default router;
