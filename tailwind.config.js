/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2md': '890px',
        '3md': '950px',
        '2xl': '1400px',
        xs: '450px',
        'xs2': '500px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}