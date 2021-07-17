const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
    "./modules/**/*.{tsx,ts}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
    colors,
    fontFamily: {
      alt: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      spacing: {
        112: "28em",
        128: "32em",
        144: "36em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
