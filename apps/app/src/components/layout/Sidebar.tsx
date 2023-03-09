import { Link, NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { Button } from 'shared-ui'
import useAuth from '~/hooks/use-auth'

export type NavItem = {
  href: string
  text: string
  icon: (...args: any[]) => JSX.Element
}

export type Navigation = (NavItem | { title: string; items: NavItem[] })[]

export type Props = {
  navigation: Navigation
}

function SidebarLink({ item }: { item: NavItem }) {
  return (
    <NavLink
      to={item.href}
      className={({ isActive }) =>
        clsx(
          ' focus:ring-primary-500 mt-1 inline-flex w-full items-center px-4 py-2 text-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2',
          isActive
            ? 'text-primary-500 dark:text-primary-300 scale-95 rounded-lg bg-neutral-100 dark:bg-neutral-700'
            : 'hover:text-primary-500 dark:hover:text-primary-300 rounded-none text-neutral-500 hover:scale-95 hover:rounded-lg hover:bg-neutral-100 focus:scale-95 focus:rounded-lg dark:text-neutral-200 dark:hover:bg-neutral-700'
        )
      }
    >
      <item.icon className="h-4 w-4" aria-hidden="true" />
      <span className="ml-4">{item.text}</span>
    </NavLink>
  )
}

export default function Sidebar({ navigation }: Props) {
  const { logout } = useAuth()

  return (
    <aside className="fixed top-0 flex h-full w-64 flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
      <Link
        to="/"
        className="focus:ring-primary-500 m-3 mr-auto rounded-lg p-1 transition-all hover:scale-95 focus:outline-none focus:ring-2"
      >
        <img src="/logo.svg" className="h-8" alt="Logo d'op-ent" />
      </Link>
      <div className="flex flex-grow flex-col">
        <nav className="flex-1 space-y-1">
          {navigation.map((n, i) => {
            if ('href' in n) return <SidebarLink key={i} item={n} />
            return (
              <div key={i} className="pt-4">
                <p className="px-4 text-xs font-semibold uppercase text-neutral-400">
                  {n.title}
                </p>
                <ul>
                  {n.items.map((item, j) => (
                    <li key={j}>
                      <SidebarLink item={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto border-t border-neutral-200 p-4 dark:border-neutral-700">
        <Button
          onClick={() => logout()}
          color="neutral"
          variant="subtle"
          className="w-full"
        >
          Déconnexion
        </Button>
      </div>
    </aside>
  )
}
