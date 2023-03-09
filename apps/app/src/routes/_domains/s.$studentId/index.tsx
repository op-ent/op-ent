import { useLoaderData, useOutlet } from '@remix-run/react'
import Layout, { defaultRedirect } from '~/components/layout/Layout'
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

export default function StudentLayout() {
  const studentId = useLoaderData<typeof loader>()
  const outlet = useOutlet()
  return <Layout navigation={navigation(studentId)}>{outlet}</Layout>
}

export function loader({ request, params }: LoaderArgs) {
  const id = params.studentId!
  defaultRedirect({
    request,
    entryURL: `/s/${id}`,
    exitURL: `/s/${id}/overview`,
  })
  return id
}
