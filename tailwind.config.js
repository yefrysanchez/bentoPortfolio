/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#1F1F1F",
      softGray: "#f7f7f7",
      softBlack: "#161a1d",
      softBlue: "#0077b6",
      white: "#ffffff"
    },
    fontFamily:{
      lato: ["Lato", "sans-serif"],
      bebas: ["Bebas Neue", "sans-serif"],
    }
  },
  plugins: [],
};
