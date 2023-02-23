import { json, type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, Link, useActionData, useTransition } from '@remix-run/react'
import { AuthorizationError } from 'remix-auth'
import { Button, Input } from 'shared-ui'
import { login, withAuth } from '~/services/auth.server'
import { Loader2 } from 'lucide-react'

export default function Login() {
  const transition = useTransition()
  const errors = useActionData<typeof action>()

  const loading = transition.state !== 'idle'

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div>
        <img
          src="/logo.svg"
          className="mx-auto mb-6 h-12"
          alt="Logo d'op-ent"
        />
        <h1 className="mb-2 text-center text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
          Connexion
        </h1>
        <p className="mb-8 max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400">
          Pas encore de compte ?{' '}
          <Link
            to="/auth/register"
            className="text-primary-500 hover:text-primary-600 focus:ring-primary-600 dark:text-primary-300 dark:hover:text-primary-400 rounded font-medium hover:underline focus:outline-none focus:ring-2"
          >
            S{"'"}inscrire
          </Link>
        </p>
      </div>
      <Form
        method="post"
        className="mx-auto grid w-full max-w-md gap-2 rounded-2xl border border-neutral-200 bg-white p-8 shadow-md dark:border-neutral-700 dark:bg-neutral-900"
      >
        {errors && (
          <pre className="bg-danger-500 text-white">
            {JSON.stringify(errors, null, 2)}
          </pre>
        )}
        <Input
          label="Adresse email"
          name="email"
          type="text"
          placeholder="exemple@gmail.com"
          required
          defaultValue="test@test.com"
        />
        <Input
          label="Mot de passe"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          defaultValue="123456"
        />
        <Button
          color="primary"
          variant="solid"
          size="xl"
          type="submit"
          className="mt-6 font-semibold uppercase"
          isDisabled={loading}
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Se connecter
        </Button>
      </Form>
    </div>
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
