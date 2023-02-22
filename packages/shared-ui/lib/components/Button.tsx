import React, { forwardRef } from 'react'
import { useButton } from 'react-aria'
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'

const button = tv({
  base: 'inline-flex items-center border border-transparent rounded-md focus:outline-none focus:ring transition-colors focus:z-10 font-medium',
  variants: {
    size: {
      sm: 'px-3 py-2 text-sm leading-4',
      md: 'px-4 py-2 text-sm',
      lg: 'px-4 py-2 text-base'
    },
    color: {
      primary: '',
      secondary: '',
      neutral: '',
      danger: '',
      warning: '',
      success: '',
      info: ''
    },
    variant: {
      solid: 'shadow-sm',
      outline: 'shadow-sm',
      ghost: ''
    }
  },
  compoundVariants: [
    {
      variant: 'solid',
      color: 'primary',
      className:
        'bg-primary-500 hover:bg-primary-600 focus:ring-primary-400 text-white'
    },
    {
      variant: 'solid',
      color: 'secondary',
      className:
        'bg-secondary-500 hover:bg-secondary-600 focus:ring-secondary-400 text-white'
    },
    {
      variant: 'solid',
      color: 'neutral',
      className:
        'bg-neutral-500 hover:bg-neutral-600 focus:ring-neutral-400 text-white'
    },
    {
      variant: 'solid',
      color: 'danger',
      className:
        'bg-danger-500 hover:bg-danger-600 focus:ring-danger-400 text-white'
    },
    {
      variant: 'solid',
      color: 'warning',
      className:
        'bg-warning-500 hover:bg-warning-600 focus:ring-warning-400 text-black'
    },
    {
      variant: 'solid',
      color: 'success',
      className:
        'bg-success-500 hover:bg-success-600 focus:ring-success-400 text-white'
    },
    {
      variant: 'solid',
      color: 'info',
      className: 'bg-info-500 hover:bg-info-600 focus:ring-info-400 text-white'
    },
    {
      variant: 'outline',
      color: 'primary',
      className:
        'bg-primary-50 border-primary-400 hover:border-primary-600 hover:bg-primary-100 focus:ring-primary-300 text-primary-700'
    },
    {
      variant: 'outline',
      color: 'secondary',
      className:
        'bg-secondary-50 border-secondary-400 hover:border-secondary-600 hover:bg-secondary-100 focus:ring-secondary-300 text-secondary-700'
    },
    {
      variant: 'outline',
      color: 'neutral',
      className:
        'bg-neutral-50 border-neutral-400 hover:border-neutral-600 hover:bg-neutral-100 focus:ring-neutral-300 text-neutral-700'
    },
    {
      variant: 'outline',
      color: 'danger',
      className:
        'bg-danger-50 border-danger-400 hover:border-danger-600 hover:bg-danger-100 focus:ring-danger-300 text-danger-700'
    },
    {
      variant: 'outline',
      color: 'warning',
      className:
        'bg-warning-50 border-warning-400 hover:border-warning-600 hover:bg-warning-100 focus:ring-warning-300 text-warning-700'
    },
    {
      variant: 'outline',
      color: 'success',
      className:
        'bg-success-50 border-success-400 hover:border-success-600 hover:bg-success-100 focus:ring-success-300 text-success-700'
    },
    {
      variant: 'outline',
      color: 'info',
      className:
        'bg-info-50 border-info-400 hover:border-info-600 hover:bg-info-100 focus:ring-info-300 text-info-700'
    },
    {
      variant: 'ghost',
      color: 'primary',
      className:
        'bg-primary-100 hover:bg-primary-200 focus:ring-primary-400 text-primary-700'
    },
    {
      variant: 'ghost',
      color: 'secondary',
      className:
        'bg-secondary-100 hover:bg-secondary-200 focus:ring-secondary-400 text-secondary-700'
    },
    {
      variant: 'ghost',
      color: 'neutral',
      className:
        'bg-neutral-100 hover:bg-neutral-200 focus:ring-neutral-400 text-neutral-700'
    },
    {
      variant: 'ghost',
      color: 'danger',
      className:
        'bg-danger-100 hover:bg-danger-200 focus:ring-danger-400 text-danger-700'
    },
    {
      variant: 'ghost',
      color: 'warning',
      className:
        'bg-warning-100 hover:bg-warning-200 focus:ring-warning-400 text-warning-700'
    },
    {
      variant: 'ghost',
      color: 'success',
      className:
        'bg-success-100 hover:bg-success-200 focus:ring-success-400 text-success-700'
    },
    {
      variant: 'ghost',
      color: 'info',
      className:
        'bg-info-100 hover:bg-info-200 focus:ring-info-400 text-info-700'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'neutral',
    variant: 'solid'
  }
})

type ButtonVariants = VariantProps<typeof button>

export interface ButtonProps extends ButtonVariants {
  as?: React.ElementType
  children?: React.ReactNode
}

type ButtonComponent = <C extends React.ElementType = 'button'>(
  props: ComponentProps<C, ButtonProps>
) => React.ReactElement | null

export const Button: ButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, ButtonProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const {
      as = 'button',
      children,
      className,
      color,
      size,
      variant,
      ...rest
    } = props
    const { buttonProps } = useButton({ ...rest, elementType: as }, ref as any)
    const Component = as as React.ElementType

    return (
      <Component
        ref={ref}
        {...buttonProps}
        className={button({ color, size, variant, className })}
      >
        {children}
      </Component>
    )
  }
)
