import { json, type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'
import { getSession } from '~/services/session.server'

export default function Login() {
  const { error } = useLoaderData<typeof loader>()

  return (
    <Form method="post">
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="user@domain.tld"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="test"
        />
      </div>

      <button>Log In</button>
    </Form>
  )
}

export async function action({ request }: ActionArgs) {
  await authenticator.authenticate('form', request, {
    successRedirect: '/dashboard',
    failureRedirect: '/auth/login'
  })
}

export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/dashboard'
  })
  const session = await getSession(request.headers.get('Cookie'))
  const error = session.get(authenticator.sessionErrorKey)
  return json({ error })
}
