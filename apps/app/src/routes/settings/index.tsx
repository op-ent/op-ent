import { type LoaderArgs } from '@remix-run/node'
import { useOutlet } from '@remix-run/react'
import { ChevronLeft, Cog } from 'lucide-react'
import Layout from '~/components/layout/Layout'
import type { Navigation } from '~/components/layout/Sidebar'
import useRedirect from '~/hooks/use-redirect'
import { withAuth } from '~/services/auth.server'
import { defaultRedirect } from '~/utils/server'

const navigation: Navigation = [
  {
    href: '/',
    text: "Retour à l'accueil",
    icon: ChevronLeft,
  },
  {
    href: '/settings/general',
    text: 'Général',
    icon: Cog,
  },
]

const redirectSettings = { entryURL: '/settings', exitURL: '/settings/general' }

export default function SettingsLayout() {
  const outlet = useOutlet()
  useRedirect(redirectSettings)
  return <Layout navigation={navigation}>{outlet}</Layout>
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { failure: true })
  return defaultRedirect({
    request,
    ...redirectSettings,
  })(() => null)
}
