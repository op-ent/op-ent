import { useLoaderData, useOutlet } from '@remix-run/react'
import Layout from '~/components/layout/Layout'
import {
  Briefcase,
  CalendarDays,
  ChevronLeft,
  CreditCard,
  Files,
  FormInput,
  GraduationCap,
  Home,
  Users,
} from 'lucide-react'
import type { Navigation } from '~/components/layout/Sidebar'
import { type LoaderArgs } from '@remix-run/node'
import { defaultRedirect } from '~/utils/server'
import useRedirect from '~/hooks/use-redirect'

const navigation = (id: string): Navigation => [
  {
    href: '/',
    text: "Retour à l'accueil",
    icon: ChevronLeft,
  },
  {
    href: `/s/${id}/overview`,
    text: "Vue d'ensemble",
    icon: Home,
  },
  {
    title: 'Scolarité',
    items: [
      {
        href: `/s/${id}/schooling/grades`,
        text: 'Notes',
        icon: GraduationCap,
      },
      {
        href: `/s/${id}/schooling/homework`,
        text: 'Devoirs',
        icon: Briefcase,
      },
      {
        href: `/s/${id}/schooling/schedule`,
        text: 'Emploi du temps',
        icon: CalendarDays,
      },
      {
        href: `/s/${id}/schooling/quizzes`,
        text: 'Questionnaires',
        icon: FormInput,
      },
    ],
  },
  {
    title: 'Administration',
    items: [
      {
        href: '/administration/paiement',
        text: 'Paiement',
        icon: CreditCard,
      },
      {
        href: '/administration/famille',
        text: 'Famille',
        icon: Users,
      },
      {
        href: '/administration/documents',
        text: 'Documents',
        icon: Files,
      },
    ],
  },
]

const redirectSettings = (id: string) => ({
  entryURL: `/s/${id}`,
  exitURL: `/s/${id}/overview`,
})

export default function StudentLayout() {
  const studentId = useLoaderData<typeof loader>()
  const outlet = useOutlet()
  useRedirect(redirectSettings(studentId))
  return <Layout navigation={navigation(studentId)}>{outlet}</Layout>
}

export function loader({ request, params }: LoaderArgs) {
  const id = params.studentId!
  return defaultRedirect({
    request,
    ...redirectSettings(id),
  })(() => id)
}
