/** @type {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]} */
const DEFAULT_SCALES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

/** @param color {string} */
const genColor = (color) =>
  Object.fromEntries(
    DEFAULT_SCALES.map((scale) => [scale, `var(--color-${color}-${scale})`])
  )

const colors = {
  // Scales
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  gray: genColor('gray'),
  blue: genColor('blue'),
  red: genColor('red'),
  green: genColor('green'),
  yellow: genColor('yellow'),
  // Functional,
  fg: {
    default: 'var(--color-fg-default)',
    muted: 'var(--color-fg-muted)',
    subtle: 'var(--color-fg-subtle)',
    'on-emphasis': 'var(--color-fg-on-emphasis)',
  },
  canvas: {
    default: 'var(--color-canvas-default)',
    overlay: 'var(--color-canvas-overlay)',
    inset: 'var(--color-canvas-inset)',
    subtle: 'var(--color-canvas-subtle)',
  },
  neutral: {
    'emphasis-plus': 'var(--color-neutral-emphasis-plus)',
    emphasis: 'var(--color-neutral-emphasis)',
    muted: 'var(--color-neutral-muted)',
    subtle: 'var(--color-neutral-subtle)',
  },
  accent: {
    fg: 'var(--color-accent-fg)',
    emphasis: 'var(--color-accent-emphasis)',
    muted: 'var(--color-accent-muted)',
    subtle: 'var(--color-accent-subtle)',
  },
  success: {
    fg: 'var(--color-success-fg)',
    emphasis: 'var(--color-success-emphasis)',
    muted: 'var(--color-success-muted)',
    subtle: 'var(--color-success-subtle)',
  },
  warning: {
    fg: 'var(--color-warning-fg)',
    emphasis: 'var(--color-warning-emphasis)',
    muted: 'var(--color-warning-muted)',
    subtle: 'var(--color-warning-subtle)',
  },
  danger: {
    fg: 'var(--color-danger-fg)',
    emphasis: 'var(--color-danger-emphasis)',
    muted: 'var(--color-danger-muted)',
    subtle: 'var(--color-danger-subtle)',
  },
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./node_modules/shared-ui/**/*.{ts,tsx}'],
  theme: {
    colors,
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
