module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        acared: '#e40c5b',
        acaorange: '#ff4c3b',
        acapurple: '#645aff'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
