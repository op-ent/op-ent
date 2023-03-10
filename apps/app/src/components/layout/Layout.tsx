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
