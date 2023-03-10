/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html","./*.html"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1840px',

      '4xl': '2140px',

      'maxmd': {'max': '767px'},
    }
  },
  plugins: [],
}
