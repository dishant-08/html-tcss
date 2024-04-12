/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "bgclr-100x": "#ef5a3c",
        "bgclr-100x-nav": "#d14f36",
      },
      fontFamily: {
        dm: ["DM Sans"],
        Inter: ["Inter"],
        cursive: ["Dancing Script"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
