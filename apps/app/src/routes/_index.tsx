import { type LoaderArgs, type ActionArgs, json } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { logout, withAuth } from '~/services/auth.server'
import { Button } from 'shared-ui'
import { getSession } from '~/services/session.server'

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <div className="p-4">
      <h1 className="mb-2 text-5xl font-bold">Home</h1>
      <p className="mb-5 text-lg text-neutral-600">
        {data?.session.data.user.user.email}
      </p>
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
  const session = await getSession(request.headers.get('cookie'))
  return json({ session })
}
