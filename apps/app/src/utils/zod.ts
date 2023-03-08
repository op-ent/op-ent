import type { ZodError } from 'zod'
import type { CustomError } from '~/types'

export function normalizeZodError(zodError: ZodError) {
  const errors: CustomError[] = []
  for (const { path, message } of zodError.issues) {
    const field = path[0] as string
    const customErrorIndex = errors.findIndex((err) => err.field === field)
    const existingCustomError = customErrorIndex !== -1
    if (existingCustomError) {
      errors[customErrorIndex].messages.push(message)
    } else {
      errors.push({ field, messages: [message] })
    }
  }
  return errors
}
