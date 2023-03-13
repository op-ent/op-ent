import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule('containsNumber', (value, _, options) => {
  if (typeof value !== 'string') {
    throw new Error('"containsNumber" rule can only be used with a string schema type')
  }

  if (!/[0-9]/.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'containsNumber',
      'containsNumber validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('containsLowercaseCharacter', (value, _, options) => {
  if (typeof value !== 'string') {
    throw new Error('"containsLowercaseCharacter" rule can only be used with a string schema type')
  }

  if (!/[a-z]/.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'containsLowercaseCharacter',
      'containsLowercaseCharacter validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('containsUppercaseCharacter', (value, _, options) => {
  if (typeof value !== 'string') {
    throw new Error('"containsUppercaseCharacter" rule can only be used with a string schema type')
  }

  if (!/[A-Z]/.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'containsUppercaseCharacter',
      'containsUppercaseCharacter validation failed',
      options.arrayExpressionPointer
    )
  }
})

validator.rule('containsSpecialCharacter', (value, _, options) => {
  if (typeof value !== 'string') {
    throw new Error('"containsSpecialCharacter" rule can only be used with a string schema type')
  }

  if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(value)) {
    options.errorReporter.report(
      options.pointer,
      'containsSpecialCharacter',
      'containsSpecialCharacter validation failed',
      options.arrayExpressionPointer
    )
  }
})
