/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#586E9A",
        secondary: "#45435C",
        accent: "#857372",
        light: "#F3F2F3",
        dark: "#45383F",
        gradientFrom: "#45435C",
        gradientTo: "#586E9A",
      },
    },
  },
  plugins: [],
};
