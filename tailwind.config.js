/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": " hsl(160, 41%, 28%)",
        "secondary": "hsl(240, 20%, 15%)",
        "light-gray": "hsl(0, 0%, 85%)",
        "dark-gray": "hsl(0, 0%, 25%)"
      }
    },
  },
  plugins: [],
}