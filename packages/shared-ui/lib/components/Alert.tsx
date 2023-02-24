import React, { useEffect, useState } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  AlertTriangleIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  XIcon,
} from 'lucide-react'

const styles = tv({
  slots: {
    wrapper: 'rounded-md p-4 border',
    icon: 'h-5 w-5',
    title: 'text-sm font-medium',
    content: 'mt-2 text-sm',
    dismissIcon:
      'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all bg-transparent',
  },
  variants: {
    color: {
      danger: {
        wrapper:
          'bg-danger-50 border-danger-100 dark:bg-danger-900/50 dark:border-danger-800',
        icon: 'text-danger-400 dark:text-danger-500',
        title: 'text-danger-800 dark:text-danger-50',
        content: 'text-danger-700 dark:text-danger-200',
        dismissIcon:
          'text-danger-500 hover:bg-danger-100 focus:ring-danger-500 focus:ring-offset-danger-50 dark:hover:bg-danger-800 dark:focus:ring-offset-danger-900',
      },
      warning: {
        wrapper:
          'bg-warning-50 border-warning-100 dark:bg-warning-900/50 dark:border-warning-800',
        icon: 'text-warning-400 dark:text-warning-500',
        title: 'text-warning-800 dark:text-warning-50',
        content: 'text-warning-700 dark:text-warning-200',
        dismissIcon:
          'text-warning-500 hover:bg-warning-100 focus:ring-warning-500 focus:ring-offset-warning-50 dark:hover:bg-warning-800 dark:focus:ring-offset-warning-900',
      },
      success: {
        wrapper:
          'bg-success-50 border-success-100 dark:bg-success-900/50 dark:border-success-800',
        icon: 'text-success-400 dark:text-success-500',
        title: 'text-success-800 dark:text-success-50',
        content: 'text-success-700 dark:text-success-200',
        dismissIcon:
          'text-success-500 hover:bg-success-100 focus:ring-success-500 focus:ring-offset-success-50 dark:hover:bg-success-800 dark:focus:ring-offset-success-900',
      },
      info: {
        wrapper:
          'bg-info-50 border-info-100 dark:bg-info-900/50 dark:border-info-800',
        icon: 'text-info-400 dark:text-info-500',
        title: 'text-info-800 dark:text-info-50',
        content: 'text-info-700 dark:text-info-200',
        dismissIcon:
          'text-info-500 hover:bg-info-100 focus:ring-info-500 focus:ring-offset-info-50 dark:hover:bg-info-800 dark:focus:ring-offset-info-900',
      },
    },
  },
  defaultVariants: {
    color: 'info',
  },
})

type AlertVariants = VariantProps<typeof styles>

function getIcon(color: AlertVariants['color']) {
  switch (color) {
    case 'warning':
      return AlertTriangleIcon
    case 'danger':
      return AlertCircleIcon
    case 'success':
      return CheckCircle2Icon
    case 'info':
    default:
      return InfoIcon
  }
}

export interface AlertProps extends AlertVariants {
  title: string
  children: React.ReactNode
  dismissible?: boolean
  className?: string
}

export function Alert(props: AlertProps) {
  const {
    color = 'info',
    title,
    children,
    dismissible = false,
    className,
  } = props
  const {
    wrapper: wrapperStyles,
    icon: iconStyles,
    title: titleStyles,
    content: contentStyles,
    dismissIcon: dismissIconStyles,
  } = styles({ color })

  const Icon = getIcon(color)

  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) setDismissed(false)
  }, [title, children])

  if (dismissed) return null

  return (
    <div role="alert" className={wrapperStyles({ className })}>
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={iconStyles()} aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className={titleStyles()}>{title}</h3>
          <div className={contentStyles()}>{children}</div>
        </div>
        {dismissible && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              {/* TODO: Use IcconButton */}
              <button
                type="button"
                className={dismissIconStyles()}
                onClick={() => setDismissed(true)}
                disabled={dismissed}
              >
                <span className="sr-only">Dismiss</span>
                <XIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
