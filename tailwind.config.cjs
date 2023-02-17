/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
