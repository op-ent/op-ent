import { type LoaderArgs, type ActionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { logout, withAuth } from '~/services/auth.server'

export default function Index() {
  return (
    <div>
      <h1>Home</h1>
      <Form method="post">
        <button>Log out</button>
      </Form>
    </div>
  )
}

export async function action({ request }: ActionArgs) {
  await logout(request)
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { failure: true })
  return null
}
