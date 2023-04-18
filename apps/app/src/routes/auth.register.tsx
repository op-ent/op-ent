import type { V2_MetaFunction } from '@remix-run/node'
import { type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, Link, useActionData, useNavigation } from '@remix-run/react'
import { Alert, Button, Input, ResizablePanel } from 'shared-ui'
import { register, withAuth } from '~/services/auth.server'
import { capitalize } from '~/utils/primitives'
import useFormHandler from '~/hooks/use-form-handler'
import AuthForm from '~/components/templates/AuthForm'
import { registerSchema } from '~/schemas/auth'

export default function Login() {
  const navigation = useNavigation()
  const actionErrors = useActionData<typeof action>()

  const loading = navigation.state === 'submitting'

  const { ref, handleSubmit, register, errors } = useFormHandler(registerSchema)

  return (
    <AuthForm
      title={'Inscription'}
      subtitle={
        <>
          Déjà un compte ?{' '}
          <Link
            to="/auth/login"
            className="text-primary-500 hover:text-primary-600 focus:ring-primary-400 dark:text-primary-300 dark:hover:text-primary-400 rounded font-medium hover:underline focus:outline-none focus:ring-2"
          >
            Se connecter
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
          {...register('email')}
        />
        <Input
          label="Mot de passe"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          {...register('password')}
        />
        <Input
          label="Confirmez votre mot de passe"
          type="password"
          placeholder="••••••••"
          error={errors.passwordConfirmation?.message}
          {...register('passwordConfirmation')}
        />
        <Button
          color="primary"
          variant="solid"
          size="xl"
          type="submit"
          className="mt-6 font-semibold uppercase"
          loading={loading}
        >
          S'inscrire
        </Button>
      </Form>
    </AuthForm>
  )
}

export const meta: V2_MetaFunction = () => [{ title: 'Inscription' }]

export async function action({ request }: ActionArgs) {
  const result = await register(request)
  if (!result.ok) {
    return result.errors
  }
  return null
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { success: true })
  return null
}
