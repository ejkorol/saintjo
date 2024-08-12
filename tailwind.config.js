/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./theme/**/*.liquid"],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'americana': ['Americana', 'serif']
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        heavy: 800,
      }
    },
  },
  plugins: [],
}

