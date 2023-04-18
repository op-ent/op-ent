import preset from 'tailwind-shared/tailwind.config'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./lib/**/*.{ts,tsx,jsx,js}', './stories/**/*.{ts,tsx,jsx,js}'],
  presets: [preset],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
