import type { LoaderArgs } from '@remix-run/node'
import { logout } from '~/services/auth.server'

export async function loader({ request }: LoaderArgs) {
  await logout(request)
  return null
}
