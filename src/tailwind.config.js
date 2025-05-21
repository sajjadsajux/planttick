/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#15803d", // Green primary
          secondary: "#d1fae5", // Light green secondary
          accent: "#4ade80", // Accent green
          neutral: "#f3f4f6", // Light gray background
          "base-100": "#ffffff", // Base background
          info: "#3abff8",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#22c55e", // Brighter green for dark mode
          secondary: "#14532d", // Darker green background
          accent: "#86efac", // Accent
          neutral: "#1f2937", // Dark gray
          "base-100": "#111827", // Very dark background
          info: "#0ea5e9",
          success: "#16a34a",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
};
