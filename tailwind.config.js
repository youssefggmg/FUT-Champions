/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}","./javaScript/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ssm': '425px',
        'slg': '1405px',
      },
    },
  },
  plugins: [],
}

