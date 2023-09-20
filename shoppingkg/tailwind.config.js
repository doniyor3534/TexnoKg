/** @type {import('tailwindcss').Config} */
module.exports = {
  
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0F172A',
        'light': '#F1F5F9',
        'yellow': '#FBC100',
        'grey0': '#BABAC0',
        'grey1': '#333333',
        'orang': '#FF5937',
        'green': '#166534',
        'bg1': '#F7F7F7',
        'bg2': '#FFFFFF',
      },
    },
   
    screens: {
      'sm': '340px',
      // => @media (min-width: 340px) { ... }
      'lg': '700px',
      // => @media (min-width: 700px) { ... }
      'xl': '1050px',
      // => @media (min-width: 1050px) { ... }
      '2xl': '1200px',
      // => @media (min-width: 1200px) { ... }
      '4xl': '1400px',
      // => @media (min-width: 1200px) { ... }
    },
  },
  plugins: [],
}
