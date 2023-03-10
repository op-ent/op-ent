import { Loader2 } from 'lucide-react'
import React, { forwardRef, useRef } from 'react'
import { useButton } from 'react-aria'
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'

export const buttonStyles = tv({
  base: [
    'inline-flex items-center justify-center border-2 border-transparent rounded-md font-medium transition-all select-none',
    'active:scale-95',
    'focus:outline-none focus:ring focus:ring-offset-2 focus:z-10',
    'focus:ring-offset-white dark:focus:ring-offset-neutral-900',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  variants: {
    size: {
      xs: 'px-2.5 py-1.5 text-xs',
      sm: 'px-3 py-2 text-sm leading-4',
      md: 'px-4 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
      xl: 'px-6 py-3 text-base',
    },
    color: {
      primary: '',
      neutral: '',
      danger: '',
      warning: '',
      success: '',
      info: '',
    },
    variant: {
      solid: 'shadow-sm',
      outline: 'shadow-sm',
      subtle: '',
    },
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      className:
        'bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 text-white dark:focus:ring-primary-500',
    },
    {
      variant: 'solid',
      color: 'neutral',
      className:
        'bg-neutral-400 hover:bg-neutral-500 focus:ring-neutral-300 text-white dark:focus:ring-neutral-500 dark:text-black',
    },
    {
      variant: 'solid',
      color: 'danger',
      className:
        'bg-danger-500 hover:bg-danger-600 focus:ring-danger-300 text-white dark:focus:ring-danger-600',
    },
    {
      variant: 'solid',
      color: 'warning',
      className:
        'bg-warning-400 hover:bg-warning-500 focus:ring-warning-300 text-black dark:focus:ring-warning-600',
    },
    {
      variant: 'solid',
      color: 'success',
      className:
        'bg-success-500 hover:bg-success-600 focus:ring-success-300 text-white dark:focus:ring-success-600',
    },
    {
      variant: 'solid',
      color: 'info',
      className:
        'bg-info-600 hover:bg-info-700 focus:ring-info-400 text-white dark:focus:ring-info-500',
    },
    {
      variant: 'outline',
      color: 'primary',
      className:
        'bg-primary-50 border-primary-300 hover:border-primary-400 hover:bg-primary-100 focus:ring-primary-300 text-primary-700 dark:bg-primary-900 dark:border-primary-600 dark:hover:border-primary-500 dark:hover:bg-primary-800 dark:focus:ring-primary-600 dark:text-primary-100',
    },
    {
      variant: 'outline',
      color: 'neutral',
      className:
        'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-white/75 focus:ring-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:focus:ring-neutral-600 dark:text-neutral-200',
    },
    {
      variant: 'outline',
      color: 'danger',
      className:
        'bg-danger-50 border-danger-300 hover:border-danger-400 hover:bg-danger-100 focus:ring-danger-300 text-danger-700 dark:bg-danger-900 dark:border-danger-600 dark:hover:border-danger-500 dark:hover:bg-danger-800 dark:focus:ring-danger-600 dark:text-danger-100',
    },
    {
      variant: 'outline',
      color: 'warning',
      className:
        'bg-warning-50 border-warning-300 hover:border-warning-400 hover:bg-warning-100 focus:ring-warning-300 text-warning-700 dark:bg-warning-900 dark:border-warning-600 dark:hover:border-warning-500 dark:hover:bg-warning-800 dark:focus:ring-warning-600 dark:text-warning-100',
    },
    {
      variant: 'outline',
      color: 'success',
      className:
        'bg-success-50 border-success-300 hover:border-success-400 hover:bg-success-100 focus:ring-success-300 text-success-700 dark:bg-success-900 dark:border-success-600 dark:hover:border-success-500 dark:hover:bg-success-800 dark:focus:ring-success-600 dark:text-success-100',
    },
    {
      variant: 'outline',
      color: 'info',
      className:
        'bg-info-50 border-info-300 hover:border-info-400 hover:bg-info-100 focus:ring-info-300 text-info-700 dark:bg-info-900 dark:border-info-600 dark:hover:border-info-500 dark:hover:bg-info-800 dark:focus:ring-info-600 dark:text-info-100',
    },
    {
      variant: 'subtle',
      color: 'primary',
      className:
        'bg-primary-100 hover:bg-primary-200 focus:ring-primary-300 text-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 dark:focus:ring-primary-500 dark:text-primary-100',
    },
    {
      variant: 'subtle',
      color: 'neutral',
      className:
        'bg-neutral-200 hover:bg-neutral-300 focus:ring-neutral-400 text-neutral-700 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:focus:ring-neutral-500 dark:text-neutral-100',
    },
    {
      variant: 'subtle',
      color: 'danger',
      className:
        'bg-danger-100 hover:bg-danger-200 focus:ring-danger-300 text-danger-700 dark:bg-danger-700 dark:hover:bg-danger-600 dark:focus:ring-danger-500 dark:text-danger-100',
    },
    {
      variant: 'subtle',
      color: 'warning',
      className:
        'bg-warning-100 hover:bg-warning-200 focus:ring-warning-300 text-warning-700 dark:bg-warning-700 dark:hover:bg-warning-600 dark:focus:ring-warning-500 dark:text-warning-100',
    },
    {
      variant: 'subtle',
      color: 'success',
      className:
        'bg-success-100 hover:bg-success-200 focus:ring-success-300 text-success-700 dark:bg-success-700 dark:hover:bg-success-600 dark:focus:ring-success-500 dark:text-success-100',
    },
    {
      variant: 'subtle',
      color: 'info',
      className:
        'bg-info-100 hover:bg-info-200 focus:ring-info-300 text-info-700 dark:bg-info-700 dark:hover:bg-info-600 dark:focus:ring-info-500 dark:text-info-100',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'neutral',
    variant: 'solid',
  },
})

type ButtonVariants = VariantProps<typeof buttonStyles>

export interface ButtonProps extends ButtonVariants {
  as?: React.ElementType
  children?: React.ReactNode
  loading?: boolean
}

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null

export const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const _ref = useRef(null)
    const newRef = ref || _ref
    const {
      as = 'button',
      children,
      loading = false,
      disabled,
      className,
      color,
      size,
      variant,
      ...rest
    } = props
    const { buttonProps } = useButton(
      { ...rest, isDisabled: disabled || loading, elementType: as },
      newRef
    )
    const Component = as as React.ElementType

    return (
      <Component
        ref={newRef}
        {...buttonProps}
        className={buttonStyles({ color, size, variant, className })}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Component>
    )
  }
)
