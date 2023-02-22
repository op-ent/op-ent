import { type LoaderArgs, type ActionArgs } from '@remix-run/node'
import { Form } from '@remix-run/react'
import { logout, withAuth } from '~/services/auth.server'
import { Button } from 'shared-ui'

export default function Index() {
  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold mb-10">Home</h1>
      <Form method="post">
        <Button color="danger" variant="solid" size="lg" type="submit">
          Log out
        </Button>
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
