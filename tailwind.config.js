/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
