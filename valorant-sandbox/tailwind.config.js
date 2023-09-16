/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#BC9F69',
        'secondary-blue': '#344350',
        'gray-light': '#DAD8DA',
        'gray-dark': '#404143',
        'black': '#0E0F11',


      }
    },
  },
  plugins: [],
}