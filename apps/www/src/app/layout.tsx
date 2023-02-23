import './globals.css'
import clsx from 'clsx'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr-FR" className={clsx(inter.className, 'h-full bg-slate-800')}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-full">
        <main className="contents">{children}</main>
      </body>
    </html>
  )
}
