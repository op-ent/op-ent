/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: ['plugin:adonis/typescriptApp', 'shared'],
  project: path.join(__dirname, 'tsconfig.json'),
}
