module.exports = {
  purge: [
    './src/**/*.jsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['disabled'],
      cursor: ['hover', 'focus','disabled'],
      transform: ['hover', 'focus', 'disabled'],
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
