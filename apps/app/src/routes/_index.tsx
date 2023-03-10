import { type LoaderArgs } from '@remix-run/node'
import { withAuth } from '~/services/auth.server'
import { GraduationCap, Home, Settings } from 'lucide-react'
import { type Navigation } from '~/components/layout/Sidebar'
import Layout from '~/components/layout/Layout'
import { Heading } from 'shared-ui'

const navigation: Navigation = [
  {
    href: '/',
    text: 'Accueil',
    icon: Home,
  },
  {
    href: '/settings/general',
    text: 'Paramètres',
    icon: Settings,
  },
  {
    title: 'Etablissements',
    items: [
      {
        href: '/s/1/overview',
        text: 'Eleve 1',
        icon: GraduationCap,
      },
      {
        href: '/s/2/overview',
        text: 'Eleve 2',
        icon: GraduationCap,
      },
    ],
  },
]

export default function Index() {
  return (
    <Layout navigation={navigation}>
      <Heading as="h1">Bienvenue !</Heading>
    </Layout>
  )
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { failure: true })
  return null
}
