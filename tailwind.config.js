/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode
        "text": "#ececef",
        "background": "#111827",
        "primary": "#2A6551",
        "secondary": "#020203",
        "accent": "#adafb8",
      }
    },
  },
  plugins: [],
}