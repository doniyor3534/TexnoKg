/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '340px',
      // => @media (min-width: 340px) { ... }
      'lg': '700px',
      // => @media (min-width: 700px) { ... }
      'xl': '1050px',
      // => @media (min-width: 1050px) { ... }
    },
  },
  plugins: [],
}
