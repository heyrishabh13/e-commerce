/** @type {import('tailwindcss').Config} */
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
        500: "rgb(65, 81, 97)",
      },
    },
  },
  plugins: [],
};
