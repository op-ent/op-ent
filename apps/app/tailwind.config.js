const { preset } = require('shared-ui')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx,jsx,js}', ...preset.content],
  presets: [preset],
}
