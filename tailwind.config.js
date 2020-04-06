const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        black: '#1a1a1a',
        white: '#f7f7f7',
        primary: '#ffe0e0',
      },
      height: {
        x_large: '18rem',
        xx_large: '22rem',
        xxx_large: '30rem',
        xxxx_large: '36rem',
        ...defaultTheme.height,
      },
    },
  },
  variants: {},
  plugins: [],
}
