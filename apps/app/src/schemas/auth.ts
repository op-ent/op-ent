import { z } from 'zod'

const passwordSchema = z
  .string()
  .min(1, { message: 'Champ obligatoire' })
  .min(6, { message: '6 caractères minimum' })

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Champ obligatoire' })
    .email({ message: 'Email invalide' }),
  password: passwordSchema,
})

export const registerSchema = loginSchema
  .merge(z.object({ passwordConfirmation: passwordSchema }))
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['passwordConfirmation'],
  })
