/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors : {
        'bgclr-100x' : '#ef5a3c',
      },
      fontFamily : {
        'dm': ["DM Sans"] ,
        'Inter' : ["Inter"]
      }


    },
  },
  plugins: [],
}

