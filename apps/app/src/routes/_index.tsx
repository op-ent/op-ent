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
          Déconnexion
        </Button>
      </Form>
      <div className="mt-4">
        {(
          [
            'primary',
            'neutral',
            'danger',
            'warning',
            'success',
            'info',
          ] as const
        ).map((color) => (
          <div key={color} className="mt-6 flex items-center space-x-6">
            {(['solid', 'outline', 'subtle'] as const).map((variant) => (
              <div key={variant} className="mt-2 flex items-center space-x-6">
                {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
                  <Button
                    key={size}
                    color={color}
                    variant={variant}
                    size={size}
                  >
                    Button
                  </Button>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
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
