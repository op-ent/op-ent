/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,
  serverBuildPath: '.netlify/functions-internal/server.js',
  serverDependenciesToBundle: ['shared-ui'],
  watchPaths: ['node_modules/shared-ui', 'remix.config.js'],
  future: {
    v2_routeConvention: true
  },
  appDirectory: 'src'
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
}
