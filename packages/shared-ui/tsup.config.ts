import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['lib/index.tsx'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: true,
    format: ['esm', 'cjs'],
    minify: true,
    treeshake: true,
  },
])
