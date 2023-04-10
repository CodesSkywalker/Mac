/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  darkMode: "class",
  theme: {
    fontFamily: {
      custom: ['Alkatra', 'sans-serif'],
      'sans': ['"PT Sans"', 'sans-serif'],
      'serif': ['"EB Garamond"', 'serif'],
      'comfortaa': ['"Comfortaa"', 'cursive'],
      'alkatra': ['"Alkatra"', 'sans-serif'],
      'alkatra': ['Alkatra', 'sans-serif'],
      'PT Sans': ['"PT Sans"', 'sans-serif'],
      'EB Garamond': ['"EB Garamond"', 'serif'],
      'Comfortaa': ['"Comfortaa"', 'cursive'],
      'Merriweather': ['"Merriweather"', 'serif'],
      'PT Sans Narrow': ['"PT Sans Narrow"', 'sans-serif'],
    },
    extend: {
      
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
