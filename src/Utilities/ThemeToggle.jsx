import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate cursor-pointer">
      <input type="checkbox" onChange={handleToggle} checked={theme === "dark"} className="hidden" />
      {/* Show Sun in dark mode */}
      <FaSun className="swap-on text-yellow-500 w-6 h-6" />
      {/* Show Moon in light mode */}
      <FaMoon className="swap-off text-gray-800 dark:text-white w-6 h-6" />
    </label>
  );
};

export default ThemeToggle;
