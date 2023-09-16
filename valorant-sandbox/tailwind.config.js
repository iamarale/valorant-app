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
        "lm-primary": "#2e3e3e",
        "lm-secondary": "#dddada",
        "lm-accent": "#657d95",
        "lm-background": "#e9e8e8",
        "lm-text": "#030203",

        // Dark Mode
        "dm-primary": "#2e3e3e",
        "dm-secondary": "#100f0f",
        "dm-accent": "#bfc9d4",
        "dm-background": "#030203",
        "dm-text": "#e9e8e8",
      }
    },
  },
  plugins: [],
}