import { Heading } from 'shared-ui'
import Breadcrumb from '~/components/layout/Breadcrumb'
import useUser from '~/hooks/use-user'
import { capitalize } from '~/utils/primitives'

function Table({ items }: { items: { key: string; value: string }[] }) {
  return (
    <div className="overflow-hidden border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900 sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-neutral-900 dark:text-white">
          User Information
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
          Personal details.
        </p>
      </div>
      <div className="border-t border-neutral-200 px-4 py-5 dark:border-neutral-700 sm:p-0">
        <dl className="sm:divide-y sm:divide-neutral-200 dark:sm:divide-neutral-700">
          {items.map(({ key, value }) => (
            <div
              key={key}
              className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6"
            >
              <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {key}
              </dt>
              <dd className="mt-1 text-sm text-neutral-900 dark:text-white sm:col-span-2 sm:mt-0">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const pages = [
  { name: 'Paramètres', href: '/settings' },
  { name: 'Général', href: '/settings/general' },
]

export default function SettingsGeneral() {
  const user = useUser()
  return (
    <div>
      <Breadcrumb pages={pages} />
      <Heading as="h1" tag="h3" className="my-6">
        Paramètres généraux
      </Heading>
      <Table
        items={Object.entries(user).map((e) => ({
          key: e[0] === 'id' ? 'ID' : capitalize(e[0]),
          value: e[1] === null ? 'None' : e[1].toString(),
        }))}
      />
    </div>
  )
}
