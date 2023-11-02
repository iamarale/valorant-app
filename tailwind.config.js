/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "valorant-red": "hsl(354, 98%, 63%)",
        "light-gray": "hsl(0, 0%, 85%)",
        "dark-gray": "hsl(0, 0%, 25%)",
      }
    },
  },
  plugins: [],
}

