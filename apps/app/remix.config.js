/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,
  serverBuildPath: '.netlify/functions-internal/server.js',
  serverDependenciesToBundle: ['shared-ui', 'client', 'ofetch'],
  watchPaths: [
    'node_modules/shared-ui',
    'node_modules/client',
    'remix.config.js'
  ],
  future: {
    v2_routeConvention: true
  },
  appDirectory: 'src'
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
}
