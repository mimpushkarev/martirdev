/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'tablet': '640px',
      'desktop': '1024px',
    },
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },

      colors:{
        'color-red': '#D60404',
        'color-gray': '#858585'
      }
    },
  },
  plugins: [],
}
