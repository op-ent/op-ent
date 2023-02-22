/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:adonis/typescriptApp', 'shared'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
}
