/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        gradient: "gradient 3s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    
      colors: {
        "trans-white": "rgba(255, 255, 255, 0.75)",
      },
      backgroundImage: {
        "red-grad":
          "radial-gradient( ellipse farthest-corner at top left, #ff8c37, #ec3750 )",
      },
    },
  },
  plugins: [],
};
