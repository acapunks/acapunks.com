module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aca-red': '#e40c5b',
        'aca-orange': '#ff4c3b',
        'aca-purple': '#645aff',
        'aca-dark': '#323232',
        'aca-white': '#fafafa'
      },
      width: {
        '28/100': '28%'
      },
      height: {
        'screen-no-navbar': 'calc(100vh - 72px)'
      },
      minWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw'
      },
      minHeight: {
        'screen-no-navbar': 'calc(100vh - 72px)'
      },
      maxWidth: {
        '1/4': '25vw',
        '1/3': '33vw',
        '1/2': '50vw',
        '2/5': '40vw',
        '3/5': '60vw'
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
    }
  },
  plugins: []
}
