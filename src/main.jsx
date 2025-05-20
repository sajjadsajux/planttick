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
import AllPlants from "./Pages/AllPlants.jsx";
import AllPlantDetails from "./Pages/AllPlantDetails.jsx";
import MyPlants from "./Pages/MyPlants.jsx";
import Loader from "./Utilities/Loader.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import MyPlantsUpdate from "./Pages/MyPlantsUpdate.jsx";
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
        path: "/allplants",
        loader: () => fetch("http://localhost:3000/plants"),
        hydrateFallbackElement: <Loader></Loader>,

        Component: AllPlants,
      },
      {
        path: "/plant/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/plants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <AllPlantDetails></AllPlantDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addplants",
        element: (
          <PrivateRoute>
            <AddPlants></AddPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/myplants",
        element: (
          <PrivateRoute>
            <MyPlants></MyPlants>
          </PrivateRoute>
        ),
      },
      {
        path: "/myplants-update/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/myplants/${params.id}`),
        element: (
          <PrivateRoute>
            <MyPlantsUpdate></MyPlantsUpdate>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
