import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const UseLogo = ({ className = "" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const logoSrc = theme === "dark" ? "/plogo.png" : "/plogo4.png";

  return (
    <Link to="/">
      <img
        src={logoSrc} // Always use light mode logo
        alt="PlantTick Logo"
        className={`object-contain ${className}`}
      />
    </Link>
  );
};

export default UseLogo;
