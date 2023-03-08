import { Authenticator, AuthorizationError } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { FormStrategy } from 'remix-auth-form'
import { client } from './client'
import { loginSchema, registerSchema } from '~/schemas/auth'
import type { CustomError } from '~/types'
import { normalizeZodError } from '~/utils/zod'

export const FORM_STRATEGY_KEY = 'form'
export const FAILURE_REDIRECT_PATH = '/auth/login'

export const auth = new Authenticator<
  NonNullable<Awaited<ReturnType<typeof client.auth.login>>['data']>
>(sessionStorage)

auth.use(
  new FormStrategy(async ({ form }) => {
    const result = loginSchema.safeParse(Object.fromEntries(form))
    if (!result.success) {
      throw new AuthorizationError(
        JSON.stringify(normalizeZodError(result.error))
      )
    }

    const { data, ok, error } = await client.auth.login(result.data)

    if (!ok) {
      throw new AuthorizationError(
        JSON.stringify([{ messages: [error.data?.errors[0].message] }])
      )
    }

    return data
  }),
  FORM_STRATEGY_KEY
)

export async function withAuth(
  request: Request,
  { success = false, failure = false }
) {
  return await auth.isAuthenticated(request, {
    successRedirect: success && '/',
    failureRedirect: failure && FAILURE_REDIRECT_PATH,
  } as any)
}

export async function logout(request: Request) {
  await auth.logout(request, { redirectTo: FAILURE_REDIRECT_PATH })
}

export async function login(request: Request) {
  try {
    const user = await auth.authenticate(FORM_STRATEGY_KEY, request, {
      successRedirect: '/',
      throwOnError: true,
    })
    return { ok: true, errors: undefined, data: user }
  } catch (err) {
    if (err instanceof Response) throw err
    return {
      ok: false,
      errors: JSON.parse((err as AuthorizationError).message) as CustomError[],
      data: undefined,
    }
  }
}

export async function register(request: Request) {
  const result = registerSchema.safeParse(
    Object.fromEntries(await request.clone().formData())
  )
  if (!result.success) {
    return {
      ok: false,
      data: undefined,
      errors: normalizeZodError(result.error),
    }
  }
  const { ok, error } = await client.auth.register(result.data)
  if (!ok) {
    return {
      ok: false,
      data: undefined,
      errors: [{ messages: [error.data?.errors[0].message] }] as CustomError[],
    }
  }

  return await login(request.clone())
}
