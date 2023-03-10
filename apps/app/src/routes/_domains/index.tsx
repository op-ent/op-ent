import type { LoaderArgs } from '@remix-run/node'
import { Outlet } from '@remix-run/react'
import { withAuth } from '~/services/auth.server'

export default function DomainsLayout() {
  return <Outlet />
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { failure: true })
  return null
}
