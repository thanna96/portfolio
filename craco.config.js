// craco.config.js
const tailwindcss = require("@tailwindcss/postcss");

module.exports = {
  style: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
};