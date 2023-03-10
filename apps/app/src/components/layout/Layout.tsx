import { redirect } from '@remix-run/node'
import PageTransition from './PageTransition'
import Sidebar, { type Props as SidebarProps } from './Sidebar'
import TopNav from './TopNav'

export type Props = SidebarProps & { children: React.ReactNode }

export default function Layout({ children, ...sidebarProps }: Props) {
  return (
    <div className="overflow-hidden">
      <Sidebar {...sidebarProps} />
      <TopNav />
      <PageTransition>
        <main className="mt-14 overflow-y-auto p-4 lg:ml-64">{children}</main>
      </PageTransition>
    </div>
  )
}

export function defaultRedirect({
  request,
  entryURL,
  exitURL,
}: {
  request: Request
  entryURL: string
  exitURL: string
}) {
  const { url } = request
  const parsedURL = new URL(url)
  if (parsedURL.pathname === entryURL) {
    return redirect(exitURL)
  }
  return null
}
