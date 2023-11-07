/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/flowbite-react/**/*.js', './pages/**/*.{ts,tsx}', './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}

