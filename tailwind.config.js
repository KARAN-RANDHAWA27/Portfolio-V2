/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ff0642': '#FF0642',
        '8d0837': '#8D0837',
      },
    },
  },
  plugins: [],
}
