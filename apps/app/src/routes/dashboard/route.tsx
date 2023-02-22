import { type LoaderArgs, type ActionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { authenticator } from '~/services/auth.server'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Form method="post">
        <button>Log out</button>
      </Form>
    </div>
  )
}

export async function action({ request }: ActionArgs) {
  await authenticator.logout(request, { redirectTo: '/auth/login' })
}

export async function loader({ request }: LoaderArgs) {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.isAuthenticated(request, {
    failureRedirect: '/auth/login'
  })
}
