/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    'shared-ui',
    'client',
    'ofetch',
    'node-fetch-native',
  ],
  watchPaths: [
    'node_modules/shared-ui/dist/index.cjs',
    'node_modules/client',
    'node_modules/tailwind-shared',
    'remix.config.js',
    'tailwind.config.js',
  ],
  future: {
    v2_errorBoundary: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
    v2_meta: true,
    unstable_tailwind: true,
    // unstable_dev: true,
  },
  appDirectory: 'src',
}
