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
import NewPlantDetails from "./Pages/NewPlantDetails.jsx";
import { ToastContainer } from "react-toastify";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import DashBoardLayout from "./Layouts/DashBoardLayout.jsx";
import MyPlantsNew from "./Pages/MyPlantsNew.jsx";
import DashboardOverview from "./Pages/DashboardOverview.jsx";
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
        path: "/about-us",
        Component: AboutUs,
      },
      {
        path: "/contact-us",
        Component: ContactUs,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/privacypolicy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms-and-conditions",
        Component: TermsAndConditions,
      },
      {
        path: "/allplants",
        loader: () => fetch("https://planttick-server.vercel.app/plants"),
        hydrateFallbackElement: <Loader></Loader>,

        element: <AllPlants viewType="card"></AllPlants>,
      },
      {
        path: "/plant/:id",
        loader: ({ params }) => fetch(`https://planttick-server.vercel.app/plants/${params.id}`),
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
        loader: ({ params }) => fetch(`https://planttick-server.vercel.app/myplants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <MyPlantsUpdate></MyPlantsUpdate>
          </PrivateRoute>
        ),
      },
      {
        path: "/newplant/:id",
        loader: ({ params }) => fetch(`https://planttick-server.vercel.app/newplants/${params.id}`),
        hydrateFallbackElement: <Loader></Loader>,

        element: (
          <PrivateRoute>
            <NewPlantDetails></NewPlantDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },

      {
        path: "allplants",
        loader: () => fetch("https://planttick-server.vercel.app/plants"),
        hydrateFallbackElement: <Loader></Loader>,
        element: <AllPlants viewType="table"></AllPlants>,
      },
      {
        path: "addplants",
        Component: AddPlants,
      },
      {
        path: "myplants",
        Component: MyPlantsNew,
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
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </StrictMode>
);
