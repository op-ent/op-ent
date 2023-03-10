import { tv } from 'tailwind-variants'

export const kbdStyles = tv({
  slots: {
    wrapper: 'space-x-1 leading-3',
    kbd: 'rounded-md border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 font-sans text-xs font-semibold text-neutral-600 dark:border-neutral-600 dark:bg-neutral-700 dark:text-neutral-300',
    plus: 'ml-1 text-neutral-400',
  },
})

export function KBD({ shortcuts }: { shortcuts: string[] }) {
  const {
    wrapper: wrapperStyles,
    kbd: _kbdStyles,
    plus: plusStyles,
  } = kbdStyles()
  return (
    <div className={wrapperStyles()}>
      {shortcuts.map((shortcut, i) => (
        <span key={shortcut}>
          <kbd className={_kbdStyles()}>{shortcut}</kbd>
          {i < shortcuts.length - 1 && <span className={plusStyles()}>+</span>}
        </span>
      ))}
    </div>
  )
}
