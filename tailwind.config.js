/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          DEFAULT: "#008009",
          dark: "#060",
        },
        sand: "#f0f0eb",
      },
    },
  },
  plugins: [],
};
