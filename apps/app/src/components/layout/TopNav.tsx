import ThemeSelector from '~/components/molecules/ThemeSelector'

export default function TopNav() {
  return (
    <div className="fixed top-0 right-0 left-64 border-b border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-900">
      <div className="flex items-center justify-between">
        <div className="text-neutral-400">Search</div>
        <ThemeSelector className="relative" />
      </div>
    </div>
  )
}
