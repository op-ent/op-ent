import { Link, useLocation } from '@remix-run/react'
import { ChevronRight, Home } from 'lucide-react'

type Page = { href: string; name: string }

export type Props = {
  pages: Page[]
}

export default function Breadcrumb({ pages }: Props) {
  const { pathname } = useLocation()
  return (
    <nav
      className="-mx-4 mb-4 -mt-4 flex overflow-x-auto border-b border-neutral-200 bg-neutral-100 px-4 py-2 dark:border-neutral-700 dark:bg-neutral-900/50"
      aria-label="Fil d'ariane"
    >
      <ol className="flex items-center space-x-4">
        <li>
          <div>
            <Link
              to="/"
              className="text-neutral-400 transition-colors hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400"
            >
              <Home className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Accueil</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRight
                className="h-5 w-5 flex-shrink-0 text-neutral-300 dark:text-neutral-400"
                aria-hidden="true"
              />
              <Link
                to={page.href}
                className="ml-4 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
                aria-current={page.href === pathname ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>

    // <nav className="mb-6 flex" aria-label="Breadcrumb">
    //   <ol className="flex space-x-4 rounded-md border border-neutral-200 bg-white px-6 dark:border-neutral-700 dark:bg-neutral-900">
    //     <li className="flex">
    //       <div className="flex items-center">
    //         <Link
    //           to="/"
    //           className="text-neutral-400 transition-colors hover:text-neutral-500 dark:text-neutral-500 dark:hover:text-neutral-400"
    //         >
    //           <Home className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
    //           <span className="sr-only">Home</span>
    //         </Link>
    //       </div>
    //     </li>
    //     {pages.map((page) => (
    //       <li key={page.name} className="flex">
    //         <div className="flex items-center">
    //           <svg
    //             className="h-full w-6 flex-shrink-0 text-neutral-200 dark:text-neutral-700"
    //             viewBox="0 0 24 44"
    //             preserveAspectRatio="none"
    //             fill="currentColor"
    //             aria-hidden="true"
    //           >
    //             <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
    //           </svg>
    //           <Link
    //             to={page.href}
    //             className="ml-4 text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
    //             aria-current={page.href === pathname ? 'page' : undefined}
    //           >
    //             {page.name}
    //           </Link>
    //         </div>
    //       </li>
    //     ))}
    //   </ol>
    // </nav>
  )
}
