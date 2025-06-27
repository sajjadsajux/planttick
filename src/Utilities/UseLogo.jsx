import React from "react";
import { Link } from "react-router";

const UseLogo = ({ className = "" }) => {
  return (
    <Link to="/">
      <img
        src="/plogo4.png" // Always use light mode logo
        alt="PlantTick Logo"
        className={`object-contain ${className}`}
      />
    </Link>
  );
};

export default UseLogo;
