export function KBD({ shortcuts }: { shortcuts: string[] }) {
  return (
    <div className="space-x-1 leading-3">
      {shortcuts.map((shortcut, i) => (
        <span key={shortcut}>
          <kbd className="rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-sans text-xs font-semibold text-neutral-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300">
            {shortcut}
          </kbd>
          {i < shortcuts.length - 1 && (
            <span className="ml-1 text-neutral-400">+</span>
          )}
        </span>
      ))}
    </div>
  )
}
