/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,
  serverBuildPath: '.netlify/functions-internal/server.js',
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
    v2_routeConvention: true,
    unstable_tailwind: true,
  },
  appDirectory: 'src',
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
}
