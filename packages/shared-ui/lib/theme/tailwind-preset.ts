import { Config } from 'tailwindcss'
import { colors } from './colors'

export const preset: Config = {
  darkMode: 'class',
  content: ['./node_modules/shared-ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
}
