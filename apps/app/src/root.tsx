import {
  type LinksFunction,
  type LoaderArgs,
  redirect,
  type V2_MetaFunction,
  json,
} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from '@remix-run/react'
import { Provider as JotaiProvider } from 'jotai'
import { Button } from 'shared-ui'
import { GlobalProgress } from '~/components/layout/GlobalProgress'
import { withAuth } from './services/auth.server'
import { client } from './services/client'
import styles from './tailwind.css'

const darkModeScript = `

  let isDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(theme) {
    theme = theme ?? window.localStorage.theme ?? 'system'

    if (theme === 'dark' || (theme === 'system' && isDarkMode.matches)) {
      document.documentElement.classList.add('dark')
    } else if (theme === 'light' || (theme === 'system' && !isDarkMode.matches)) {
      document.documentElement.classList.remove('dark')
    }

    return theme
  }

  function updateThemeWithoutTransitions(theme) {
    updateTheme(theme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  isDarkMode.addEventListener('change', () => updateThemeWithoutTransitions())
`

export const meta: V2_MetaFunction = () => [
  {
    title: 'op-ent',
  },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  {
    rel: 'stylesheet',
    href: 'https://rsms.me/inter/inter.css',
  },
]

function SharedStructure({
  children,
  head,
}: {
  children: React.ReactNode
  head?: React.ReactNode
}) {
  return (
    <html lang="fr-FR" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {head}
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: darkModeScript }}></script>
      </head>
      <body className="h-full bg-neutral-50 dark:bg-neutral-800">
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function RootLayout() {
  const loaderData = useLoaderData<typeof loader>()
  if (loaderData?.authData) {
    client.auth.token = loaderData.authData.token
    client.auth.user = loaderData.authData.user
  }
  return (
    <SharedStructure>
      <JotaiProvider>
        <GlobalProgress />
        <Outlet />
      </JotaiProvider>
    </SharedStructure>
  )
}

// Always remove trailing slash
export async function loader({ request }: LoaderArgs) {
  const parsedUrl = new URL(request.url)
  const path = parsedUrl.pathname
  if (path.length > 1 && /\/$/.test(path)) {
    const newPath = path.slice(0, -1) + parsedUrl.search + parsedUrl.hash
    return redirect(newPath)
  }

  const authData = await withAuth(request)
  return json({ authData })
}

export function ErrorBoundary() {
  const error = useRouteError()

  const routeError = isRouteErrorResponse(error)

  const text = routeError
    ? error.status === 404
      ? 'Page introuvable'
      : 'Une erreur est survenue'
    : 'Une erreur est survenue'
  const desc = routeError
    ? error.status === 404
      ? "Désolé, nous n'avons pas trouvé la page que vous recherchez."
      : 'Veuillez nous signaler le problème.'
    : (error as any).message || 'Erreur inconnue'

  const status = routeError ? error.status : 500

  return (
    <SharedStructure head={<title>{`Erreur ${status} - ${text}`}</title>}>
      <main className="grid min-h-full place-items-center py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-primary-500 text-base font-semibold">{status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            {text}
          </h1>
          <p className="mt-6 text-base leading-7 text-neutral-500 dark:text-neutral-400">
            {desc}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Button
              as="a"
              href="/"
              color="primary"
              className="w-full sm:w-auto"
            >
              Retourner à l'accueil
            </Button>
            <Button
              as="a"
              href="https://github.com/op-ent/op-ent/issues"
              color="neutral"
              variant="subtle"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              Ouvrir une issue sur GitHub
            </Button>
          </div>
        </div>
      </main>
    </SharedStructure>
  )
}
