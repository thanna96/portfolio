/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundSize: {
        '50': '50%!important',
        '100': '100%!important',
      },
      height: {
        '90': '90%',
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  }
};