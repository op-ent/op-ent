import { Link, useNavigate } from '@remix-run/react'
import clsx from 'clsx'

const tabs = [
  { name: 'Trimestre 1', href: '?period=0', current: true },
  { name: 'Trimestre 2', href: '?period=1', current: false },
  { name: 'Trimestre 3', href: '?period=2', current: false },
]

function Example() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="form-select focus:border-primary-500 focus:ring-primary-500 block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-base focus:outline-none sm:text-sm"
          defaultValue={tabs.find((tab) => tab.current)!.name}
          onChange={(e) => {
            navigate(e.target.value)
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name} value={tab.href}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-neutral-200 dark:border-neutral-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.href}
                className={clsx(
                  tab.current
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:border-neutral-200 hover:text-neutral-700',
                  'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default function StudentGrades() {
  return (
    <div>
      <h1>Student grades</h1>
      <div>
        <Example />
      </div>
    </div>
  )
}
