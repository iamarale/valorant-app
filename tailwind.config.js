/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "valorant-red": "hsl(354, 98%, 60%)",
        "light-gray": "hsl(0, 0%, 95%)",
        "dark-gray": "#041D2A",
      }
    },
  },
  plugins: [],
}

