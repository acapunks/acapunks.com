module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        acared: '#e40c5b',
        acaorange: '#ff4c3b',
        acapurple: '#645aff'
      },
      minWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw'
      },
      maxWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw'
      }
    },
    fontFamily: {
      sans: [
        'Montserrat',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
