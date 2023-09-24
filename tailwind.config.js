/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode
        "lm-text": "#090a0b",
        "lm-background": "#ececef",
        "lm-primary": "#79C7AD",
        "lm-secondary": "#c5c5d8",
        "lm-accent": "#5f616d",

        // Dark Mode
        "dm-text": "#ececef",
        "dm-background": "#121615",
        "dm-primary": "#2A6551",
        "dm-secondary": "#020203",
        "dm-accent": "#adafb8",
      }
    },
  },
  plugins: [],
}