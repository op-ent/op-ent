import type { V2_MetaFunction } from '@remix-run/node'
import { json, type ActionArgs, type LoaderArgs } from '@remix-run/node'
import { Form, Link, useActionData, useTransition } from '@remix-run/react'
import { AuthorizationError } from 'remix-auth'
import { Alert, Button, Input, ResizablePanel } from 'shared-ui'
import { login, withAuth } from '~/services/auth.server'
import { z, type ZodError } from 'zod'
import { capitalize } from '~/utils/primitives'
import useFormHandler from '~/hooks/use-form-handler'

type CustomError = {
  field?: string
  message: string
  code?: string
}

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Champ obligatoire' })
    .email({ message: 'Email invalide' }),
  password: z
    .string()
    .min(1, { message: 'Champ obligatoire' })
    .min(6, { message: '6 caractères minimum' }),
})

export default function Login() {
  const transition = useTransition()
  const actionData = useActionData<CustomError | null>()

  const loading = transition.state !== 'idle'

  const { ref, handleSubmit, register, errors } = useFormHandler(schema)

  return (
    <>
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
            className="text-primary-500 hover:text-primary-600 focus:ring-primary-400 dark:text-primary-300 dark:hover:text-primary-400 rounded font-medium hover:underline focus:outline-none focus:ring-2"
          >
            S{"'"}inscrire
          </Link>
        </p>
      </div>
      <Form
        method="post"
        ref={ref}
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-md grid-cols-1 gap-6 rounded-2xl border border-neutral-200 bg-white p-8 pt-2 shadow-md dark:border-neutral-700 dark:bg-neutral-900"
      >
        <ResizablePanel>
          {actionData && (
            <Alert
              title="Une erreur est survenue"
              color="warning"
              dismissible={true}
            >
              <p>
                {actionData.field && `${capitalize(actionData.field)} : `}
                {actionData.message}
              </p>
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
    </>
  )
}

export const meta: V2_MetaFunction = () => [{ title: 'Connexion' }]

export async function action({ request }: ActionArgs) {
  const formData = await request.clone().formData()
  try {
    schema.parse(Object.fromEntries(formData))
  } catch (err: unknown) {
    const error: CustomError = (err as ZodError).issues.map((e) => ({
      field: e.path[0] as string,
      message: e.message,
    }))[0]
    return json(error, { status: 422 })
  }

  try {
    await login(request, formData)
  } catch (err) {
    if (err instanceof AuthorizationError) {
      const error: CustomError = {
        message: err.message,
      }
      return json(error, { status: 422 })
    }
    await login(request, formData, false)
  }
  return null
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { success: true })
  return null
}
