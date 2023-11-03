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
        "beige": "hsl(42, 20%, 90%)",
        "light-gray": "hsl(0, 0%, 95%)",
        "dark-gray": "hsl(210, 40%, 10%)",
      }
    },
  },
  plugins: [],
}

