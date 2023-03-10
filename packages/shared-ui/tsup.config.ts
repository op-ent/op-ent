import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['lib/index.tsx'],
    splitting: true,
    sourcemap: true,
    clean: true,
    dts: false,
    format: ['esm', 'cjs'],
    minify: true,
    treeshake: true,
    external: ['react'],
  },
])
