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
        smoothSpin:
          "smoothSpin 2000ms cubic-bezier(.175, .885, .32, 1.275) infinite",
      },
      keyframes: {
        smoothSpin: {
          "0%, 15%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
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
        "muted-grad": "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.5))",
      },
    },
  },
  plugins: [],
};
