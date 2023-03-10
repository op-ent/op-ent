import React, { useEffect, useState } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import {
  AlertTriangleIcon,
  AlertCircleIcon,
  CheckCircle2Icon,
  InfoIcon,
  XIcon,
} from 'lucide-react'
import { IconButton } from './IconButton'

export const alertStyles = tv({
  slots: {
    wrapper: 'rounded-md p-4 border',
    icon: 'h-5 w-5',
    title: 'text-sm font-medium',
    content: 'mt-2 text-sm',
  },
  variants: {
    color: {
      danger: {
        wrapper:
          'bg-danger-50 border-danger-100 dark:bg-danger-900/50 dark:border-danger-800',
        icon: 'text-danger-400 dark:text-danger-500',
        title: 'text-danger-800 dark:text-danger-50',
        content: 'text-danger-700 dark:text-danger-200',
      },
      warning: {
        wrapper:
          'bg-warning-50 border-warning-100 dark:bg-warning-900/50 dark:border-warning-800',
        icon: 'text-warning-400 dark:text-warning-500',
        title: 'text-warning-800 dark:text-warning-50',
        content: 'text-warning-700 dark:text-warning-200',
      },
      success: {
        wrapper:
          'bg-success-50 border-success-100 dark:bg-success-900/50 dark:border-success-800',
        icon: 'text-success-400 dark:text-success-500',
        title: 'text-success-800 dark:text-success-50',
        content: 'text-success-700 dark:text-success-200',
      },
      info: {
        wrapper:
          'bg-info-50 border-info-100 dark:bg-info-900/50 dark:border-info-800',
        icon: 'text-info-400 dark:text-info-500',
        title: 'text-info-800 dark:text-info-50',
        content: 'text-info-700 dark:text-info-200',
      },
    },
  },
  defaultVariants: {
    color: 'info',
  },
})

type AlertVariants = VariantProps<typeof alertStyles>

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
  } = alertStyles({ color })

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
              <IconButton
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                color={color as any}
                onClick={() => setDismissed(true)}
                aria-label="Ignorer"
                size="xs"
                variant="outline"
              >
                <XIcon />
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
