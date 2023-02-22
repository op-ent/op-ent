import { json, type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import { AuthorizationError } from 'remix-auth'
import { Button } from 'shared-ui'
import { login, withAuth } from '~/services/auth.server'

export default function Login() {
  const error = useActionData<typeof action>()

  return (
    <Form method="post" className="p-4">
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          defaultValue="test@test.com"
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          defaultValue="123456"
        />
      </div>

      <Button color="primary" variant="solid" type="submit">
        Log In
      </Button>
    </Form>
  )
}

export async function action({ request }: ActionArgs) {
  const formData = await request.clone().formData()
  try {
    await login(request, formData)
  } catch (error) {
    if (error instanceof AuthorizationError) {
      return json(JSON.parse(error.message))
    }
    await login(request, formData, false)
  }
  return null
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { success: true })
  return json({})
}
