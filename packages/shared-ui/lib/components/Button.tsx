import { Loader2 } from 'lucide-react'
import React, { forwardRef, useRef } from 'react'
import { useButton } from 'react-aria'
import { tv } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'

export const buttonStyles = tv({
  base: [
    'inline-flex items-center justify-center border-2 border-transparent rounded-full font-medium transition-all select-none',
    'focus:outline-none ring-transparent focus:ring focus:z-10',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  variants: {
    size: {
      sm: 'px-3 py-2 text-sm leading-4',
      md: 'px-4 py-2 text-sm',
      lg: 'px-4 py-2 text-base',
    },
    variant: {
      default:
        'bg-[--color-button-default-bg] text-[--color-button-default-fg] border-[--color-button-default-border] focus:ring-[--color-button-default-focus-ring] hover:bg-[--color-button-default-hover-bg]',
      accent: '',
      outline: '',
      danger: '',
      ghost: '',
      link: '',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

type ButtonVariants = {
  size: 'sm' | 'md' | 'lg'
  variant: 'default' | 'accent' | 'outline' | 'danger' | 'ghost' | 'link'
}

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
        className={buttonStyles({ size, variant, className })}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </Component>
    )
  }
)
