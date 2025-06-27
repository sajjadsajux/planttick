import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Home from "../Pages/Home";

const MainLayout = () => {
  return (
    <div className="bg-base-300 ">
      <header className=" sticky top-0 z-50">
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
