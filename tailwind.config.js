const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/modules/**/*.{tsx,ts}',
    './src/layouts/**/*.tsx'
  ],
  mode: 'jit',
  theme: {
    screens: {
      xs: '425px',
      ...defaultTheme.screens,
      '3xl': '2048px',
      '4xl': '2564px'
    },
    colors: {
      ...colors,
      'spec-red': '#ec6971',
      'spec-orange': '#f9a96e',
      'spec-yellow': '#f2d24c',
      'spec-green': '#8fc96e',
      'spec-blue': '#75b9e3',
      'spec-purple': '#afa5d1'
    },
    fontFamily: {
      alt: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      spacing: {
        112: '28em',
        128: '32em',
        144: '36em',
        172: '46em',
        200: '56em'
      },
      brightness: {
        20: '.2',
        30: '.3'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
