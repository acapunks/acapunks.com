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
      width: {
        '28/100': '28%'
      },
      minWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw'
      },
      maxWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw',
        '2/5': '40vw',
        '3/5': '60vw'
      },
      height: {
        'screen-no-navbar': 'calc(100vh - 72px)'
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
    extend: {
      textColor: ['active'],
      backgroundColor: ['active'],
      backgroundOpacity: ['active']
    }
  },
  plugins: []
}
