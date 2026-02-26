/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bgclr-100x": "#ef5a3c",
        "bgclr-100x-nav": "#d14f36",
      },
      fontFamily: {
        dm: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
