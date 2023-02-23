const twColors = require('tailwindcss/colors')

const colors = {
  primary: twColors.sky,
  neutral: twColors.slate,
  danger: twColors.red,
  success: twColors.emerald,
  warning: twColors.amber,
  info: twColors.cyan,
}

module.exports.colors = colors

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./node_modules/shared-ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
