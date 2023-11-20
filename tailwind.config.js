/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./public/index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
    ],
  theme: {
    extend: {},
      colors: {
        primary: '#7a86b8',
        secondary: '#4f5b93',
        background: '#333333',
        text: '#cccccc',
      }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

