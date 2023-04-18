import { redirect, type LoaderArgs } from '@remix-run/node'
import { useOutlet } from '@remix-run/react'
import PageTransition from '~/components/layout/PageTransition'
import ThemeSelector from '~/components/molecules/ThemeSelector'

export default function AuthLayout() {
  const outlet = useOutlet()
  return (
    <>
      <ThemeSelector className="fixed top-4 right-4 z-30" />
      <PageTransition as="main">
        <div className="flex min-h-full flex-col items-center justify-center py-4">
          {outlet}
        </div>
      </PageTransition>
    </>
  )
}

export function loader({ request: { url } }: LoaderArgs) {
  const parsedURL = new URL(url)
  if (parsedURL.pathname === '/auth') {
    return redirect('/auth/login')
  }
  return null
}
