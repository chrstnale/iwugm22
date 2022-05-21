const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      axiforma: ['Axiforma'],
      body: ['Montserrat', ...defaultTheme.fontFamily.sans],
      deco: ['ui-sans-serif', 'Playfair']
    },
    extend: {
      colors:{
        blue: '#024c68',
        red: '#ab092e',
        black:'#161616',
        white: '#f4f4f4',
      }

    },
  },
  plugins: [],
}
