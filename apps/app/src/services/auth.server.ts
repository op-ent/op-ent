import { Authenticator, AuthorizationError } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { FormStrategy } from 'remix-auth-form'
import { client } from './client'
import invariant from 'tiny-invariant'
import type Client from 'client/lib/client'

export const FORM_STRATEGY_KEY = 'form'
export const FAILURE_REDIRECT_PATH = '/auth/login'

export const auth = new Authenticator<
  NonNullable<Awaited<ReturnType<Client['auth']['login']>>['data']>
>(sessionStorage)

auth.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email')
    const password = form.get('password')

    invariant(typeof email === 'string', 'Email must be a string.')
    invariant(email.length > 0, 'Email must not be empty.')

    invariant(typeof password === 'string', 'Password must be a string.')
    invariant(password.length > 0, 'Password must not be empty.')

    const { data, error } = await client.auth.login(email, password)

    if (error) {
      throw new AuthorizationError(JSON.stringify(error.data?.errors))
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
    failureRedirect: failure && FAILURE_REDIRECT_PATH
  } as any)
}

export async function logout(request: Request) {
  await auth.logout(request, { redirectTo: FAILURE_REDIRECT_PATH })
}

export async function login(
  request: Request,
  formData: FormData,
  throwOnError = true
) {
  return await auth.authenticate(FORM_STRATEGY_KEY, request, {
    successRedirect: '/',
    throwOnError,
    context: { formData }
  })
}
