/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-clr': '#BC9F69',
        'secondary-clr': '#B0A3A5',
        'primary-light': '#344350',
        'secondary-light': '#DAD8DA',
        'primary-dark': '#404143',
        'secondary-dark': '#404143',
      }
    },
  },
  plugins: [],
}