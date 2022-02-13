module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50': '50%!important',
      '100': '100%!important',
    },
    extend: {
      height: {
        '90': '90%',
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
