import React from "react";
import { Link } from "react-router";

const UseLogoNew = ({ className = "" }) => {
  return (
    <Link to="/">
      <img
        src="/plogo.png" // Always use light mode logo
        alt="PlantTick Logo"
        className={`object-contain ${className}`}
      />
    </Link>
  );
};

export default UseLogoNew;
