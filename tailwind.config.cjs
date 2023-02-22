/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primary: {
        light: "rgb(255, 104, 104",
        default: "rgb(255, 81, 81)",
        dark: "rgb(255, 63, 38)",
      },
      gray: {
        200: "rgb(244,245,246)",
        500: "rgb(65, 81, 97)",
      },
      white: colors.white,
      black: colors.black,
    },
  },
  plugins: [],
};
