import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AddPlants from "./Pages/AddPlants.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/addplants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
