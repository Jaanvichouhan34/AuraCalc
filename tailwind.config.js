/** @type {import('tailwindcss').Config} */
export default {
  // THIS LINE IS MANDATORY for manual toggles to work
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}