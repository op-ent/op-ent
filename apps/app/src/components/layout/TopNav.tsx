import ThemeSelector from '~/components/molecules/ThemeSelector'
import { IconButton, KBD } from 'shared-ui'
import { useSetAtom } from 'jotai'
import { openSidebarAtom } from '~/stores/layout'
import { Menu } from 'lucide-react'
import useUser from '~/hooks/use-user'

function SidebarButton() {
  const setOpen = useSetAtom(openSidebarAtom)
  return (
    <IconButton
      variant="subtle"
      className="mr-4 lg:hidden"
      onClick={() => setOpen(true)}
      aria-label="Ouvrir le menu latéral"
    >
      <Menu />
    </IconButton>
  )
}

function CommandPaletteButton() {
  return (
    <button
      onClick={() => alert('open command palette')}
      className="flex h-full items-center space-x-4 text-neutral-400 transition-opacity hover:opacity-75"
    >
      <div>Search</div>
      <KBD shortcuts={['CTRL', 'K']} />
    </button>
  )
}

function UserAvatar() {
  const user = useUser()
  return (
    <img
      src={encodeURI(
        `https://source.boringavatars.com/beam/40/${user.id}?colors=38bdf8,0ea5e9,0284c7`
      )}
      alt={`Avatar de ${user.email}`}
      className="h-10 w-10 rounded-full"
    />
  )
}

export default function TopNav() {
  return (
    <div className="fixed top-0 right-0 left-0 h-14 border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:left-64">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <SidebarButton />
          <CommandPaletteButton />
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSelector className="relative" />
          <UserAvatar />
        </div>
      </div>
    </div>
  )
}
