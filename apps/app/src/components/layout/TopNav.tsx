import ThemeSelector from '~/components/molecules/ThemeSelector'
import { IconButton, KBD } from 'shared-ui'
import { useSetAtom } from 'jotai'
import { openSidebarAtom } from '~/stores/layout'
import { Menu } from 'lucide-react'

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

export default function TopNav() {
  return (
    <div className="fixed top-0 right-0 left-0 h-14 border-b border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 lg:left-64">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center">
          <SidebarButton />
          <CommandPaletteButton />
        </div>
        <ThemeSelector className="relative" />
      </div>
    </div>
  )
}
