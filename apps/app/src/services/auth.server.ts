import { Authenticator, AuthorizationError } from 'remix-auth'
import { sessionStorage } from '~/services/session.server'
import { FormStrategy } from 'remix-auth-form'

export const authenticator = new Authenticator<{ token: string }>(
  sessionStorage
)

async function login(email: string, password: string) {
  const res = await fetch('http://localhost:3333/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  if (data.errors !== undefined) {
    throw new AuthorizationError(JSON.stringify(data.errors))
  }
  return { token: data.token }
}

authenticator.use(
  new FormStrategy(async ({ form }) => {
    const email = form.get('email')
    const password = form.get('password')
    if (!email) {
      throw new AuthorizationError('Email is required')
    }
    if (!password) {
      throw new AuthorizationError('Password is required')
    }
    return await login(email.toString(), password.toString())
  }),
  'form'
)
