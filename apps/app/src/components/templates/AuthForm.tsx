export type Props = {
  title: React.ReactNode
  subtitle: React.ReactNode
  children: React.ReactNode
}

const links = [
  {
    href: 'https://github.com/op-ent/op-ent',
    text: 'GitHub',
  },
  {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    text: 'Mentions légales',
  },
  {
    href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    text: 'Politique de confidentialité',
  },
]

export default function AuthForm({ title, subtitle, children }: Props) {
  return (
    <>
      <img src="/logo.svg" className="mx-auto mb-6 h-12" alt="Logo d'op-ent" />
      <h1 className="mb-2 text-center text-4xl font-semibold text-neutral-700 dark:text-neutral-300">
        {title}
      </h1>
      <p className="max-w-md text-center text-sm text-neutral-600 dark:text-neutral-400">
        {subtitle}
      </p>
      <div className="mx-auto my-8 grid w-full max-w-md grid-cols-1 gap-6 rounded-2xl border border-neutral-200 bg-white p-8 pt-2 shadow-md dark:border-neutral-700 dark:bg-neutral-900">
        {children}
      </div>
      <p className="flex max-w-md flex-col text-center text-sm text-neutral-600 dark:text-neutral-400 sm:block">
        {links.map((link, i) => (
          <span key={i}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-primary-500 hover:text-primary-600 focus:ring-primary-400 dark:text-primary-300 dark:hover:text-primary-400 rounded font-medium hover:underline focus:outline-none focus:ring-2"
            >
              {link.text}
            </a>
            {i < links.length - 1 && (
              <span className="hidden sm:inline"> · </span>
            )}
          </span>
        ))}
      </p>
    </>
  )
}
