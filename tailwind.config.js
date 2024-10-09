/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#404EED",
        "primary-gray": "#23272A",
        "secondary-gray": "#313338",
        "accent-gray": "#2B2D31",
        "hover-gray": "#393C41",
      },
      keyframes: {
        slideLeft: {
          "0%": { marginLeft: "0%" },
          "100%": { marginLeft: "100%" },
        },
        slideRight: {
          "0%": { marginLeft: "0%" },
          "100%": { marginLeft: "-100%" },
        },
      },
      animation: {
        slideRight: "slideRight 0.5s ease-in-out forwards ",
        slideLeft: "slideLeft 0.5s ease-in-out forwards ",
      },
    },
  },
  plugins: [],
};
