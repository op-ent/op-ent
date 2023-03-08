import type { V2_MetaFunction } from '@remix-run/node'
import { type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, Link, useActionData, useTransition } from '@remix-run/react'
import { Alert, Button, Input, ResizablePanel } from 'shared-ui'
import { login, withAuth } from '~/services/auth.server'
import { capitalize } from '~/utils/primitives'
import useFormHandler from '~/hooks/use-form-handler'
import AuthForm from '~/components/templates/AuthForm'
import { loginSchema } from '~/schemas/auth'

export default function Login() {
  const transition = useTransition()
  const actionErrors = useActionData<typeof action>()

  const loading = transition.state === 'submitting'

  const { ref, handleSubmit, register, errors } = useFormHandler(loginSchema)

  return (
    <AuthForm
      title={'Connexion'}
      subtitle={
        <>
          Pas encore de compte ?{' '}
          <Link
            to="/auth/register"
            className="text-primary-500 hover:text-primary-600 focus:ring-primary-400 dark:text-primary-300 dark:hover:text-primary-400 rounded font-medium hover:underline focus:outline-none focus:ring-2"
          >
            S{"'"}inscrire
          </Link>
        </>
      }
    >
      <Form
        method="post"
        ref={ref}
        onSubmit={handleSubmit}
        className="contents"
      >
        <ResizablePanel>
          {actionErrors && (
            <Alert
              title={`Il y a ${actionErrors.length} erreur${
                actionErrors.length === 1 ? '' : 's'
              }`}
              color="warning"
              dismissible={true}
              className="mt-6"
            >
              <ul>
                {actionErrors.map((error, i) => (
                  <li key={i}>
                    <strong>
                      {capitalize(error.field || 'Général')}
                      {' : '}
                    </strong>
                    <span>{error.messages.join(' ; ')}</span>
                  </li>
                ))}
              </ul>
            </Alert>
          )}
        </ResizablePanel>
        <Input
          label="Adresse email"
          type="text"
          placeholder="exemple@gmail.com"
          error={errors.email?.message}
          defaultValue="test@test.com"
          {...register('email')}
        />
        <Input
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          defaultValue="123456"
          {...register('password')}
        />
        <Button
          color="primary"
          variant="solid"
          size="xl"
          type="submit"
          className="mt-6 font-semibold uppercase"
          loading={loading}
        >
          Se connecter
        </Button>
      </Form>
    </AuthForm>
  )
}

export const meta: V2_MetaFunction = () => [{ title: 'Connexion' }]

export async function action({ request }: ActionArgs) {
  const result = await login(request)
  if (!result.ok) {
    return result.errors
  }
  return null
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { success: true })
  return null
}
