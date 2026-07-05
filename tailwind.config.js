/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        maroon: "#8B1A1A",
        gold: "#D4A574",
        dark: "#2C1810",
        warm: "#FFF8F0"
      }
    }
  },
  plugins: []
};
