/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#404EED",
        "primary-gray": "#23272A",
        "secondary-gray": "#313338",
        "hover-gray": "#393C41",
      },
    },
  },
  plugins: [],
};
