import { Dialog, Transition } from '@headlessui/react'
import { Link, NavLink, useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import { X } from 'lucide-react'
import { Fragment, useEffect } from 'react'
import { Button, IconButton } from 'shared-ui'
import useAuth from '~/hooks/use-auth'
import { openSidebarAtom } from '~/stores/layout'

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

function SidebarHeader() {
  return (
    <div className="mx-3 flex h-14 items-center">
      <Link
        to="/"
        className="focus:ring-primary-500 inline-block rounded-md p-1 transition-all hover:scale-95 focus:outline-none focus:ring-2"
      >
        <img src="/logo.svg" className="h-8" alt="Logo d'op-ent" />
      </Link>
    </div>
  )
}

function SidebarContent({ navigation }: Props) {
  const { logout } = useAuth()

  return (
    <>
      <SidebarHeader />
      <div className="flex flex-grow flex-col">
        <nav className="flex-1 space-y-1">
          {navigation.map((n, i) => {
            if ('href' in n) return <SidebarLink key={i} item={n} />
            return (
              <div key={i} className="pt-4">
                <p className="px-4 text-xs font-medium text-neutral-400">
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
    </>
  )
}

function MobileSidebar(props: Props) {
  const [open, setOpen] = useAtom(openSidebarAtom)

  const location = useLocation()
  useEffect(() => {
    setOpen(false)
  }, [location, setOpen])

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-neutral-500/80 dark:bg-neutral-800/80" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-[16rem] flex-1 flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-10 pt-2">
                  <IconButton
                    variant="subtle"
                    size="xs"
                    className="focus:ring-offset-neutral-500/80 dark:ring-offset-neutral-800/80"
                    onClick={() => setOpen(false)}
                    aria-label="Fermer le menu latéral"
                  >
                    <X />
                  </IconButton>
                </div>
              </Transition.Child>
              <SidebarContent {...props} />
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-12 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default function Sidebar(props: Props) {
  return (
    <>
      <MobileSidebar {...props} />
      <aside className="fixed top-0 hidden h-full w-64 flex-col border-r border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:flex">
        <SidebarContent {...props} />
      </aside>
    </>
  )
}
