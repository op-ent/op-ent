const { colors } = require('shared-ui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx,jsx,js}',
    './node_modules/shared-ui/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors
      }
    }
  },
  plugins: []
}
