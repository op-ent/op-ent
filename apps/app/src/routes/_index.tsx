import { type LoaderArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { withAuth } from '~/services/auth.server'
import { getSession } from '~/services/session.server'
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
    href: '/settings',
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
  const data = useLoaderData<typeof loader>()
  return (
    <Layout navigation={navigation}>
      <Heading as="h1">Bienvenue !</Heading>
      <p className="mb-5 text-lg text-neutral-400">
        {data?.session.data.user.user.email}
      </p>
    </Layout>
  )
}

export async function loader({ request }: LoaderArgs) {
  await withAuth(request, { failure: true })
  const session = await getSession(request.headers.get('cookie'))
  return json({ session })
}
