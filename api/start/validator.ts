import { validator } from '@ioc:Adonis/Core/Validator'

validator.rule<[number]>('length', (value, [length], options) => {
  if (typeof value !== 'string') return
  if (value.length !== length) {
    options.errorReporter.report(
      options.pointer,
      'length.length',
      'length.length validation failed',
      options.arrayExpressionPointer,
      { length }
    )
  }
})
