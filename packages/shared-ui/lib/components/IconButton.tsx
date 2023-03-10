import { cloneElement, forwardRef, isValidElement } from 'react'
import { tv } from 'tailwind-variants'
import type { ComponentProps, PolymorphicRef } from '../types/polymorphic'
import { type ButtonProps, Button } from './Button'

// https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/button/src/icon-button.tsx

export const iconButtonStyles = tv({
  slots: {
    button: '',
    icon: '',
  },
  variants: {
    size: {
      xs: { button: 'py-1 px-0.5', icon: 'h-5 h-5' },
      sm: { button: 'py-1.5 px-1', icon: 'h-5 h-5' },
      md: { button: 'p-1.5', icon: 'h-6 w-6' },
      lg: { button: 'p-2', icon: 'h-6 w-6' },
      xl: { button: 'py-2 px-3', icon: 'h-8 h-8' },
    },
    isRound: {
      true: { button: 'rounded-full', icon: '' },
    },
  },
  defaultVariants: {
    size: 'md',
    isRound: false,
  },
})

export interface IconButtonProps extends ButtonProps {
  icon?: React.ReactElement
  isRound?: boolean
  'aria-label': string
}

type IconButtonComponent = <C extends React.ElementType = 'button'>(
  props: ComponentProps<C, IconButtonProps>
) => React.ReactElement | null

export const IconButton: IconButtonComponent = forwardRef(
  <C extends React.ElementType = 'button'>(
    props: ComponentProps<C, IconButtonProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const {
      icon,
      children,
      'aria-label': ariaLabel,
      className,
      isRound = false,
      ...rest
    } = props

    const { button: buttonStyles, icon: iconStyles } = iconButtonStyles({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      size: props.size as any,
      isRound,
    })

    const element = icon || children
    const _children = isValidElement(element)
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
        cloneElement(element as any, {
          'aria-hidden': true,
          focusable: false,
          className: iconStyles({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            className: (element.props as any)?.className,
          }),
        })
      : null

    // TODO: use tooltip to show aria label
    return (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      <Button
        ref={ref}
        aria-label={ariaLabel}
        className={buttonStyles({ className })}
        {...rest}
      >
        {_children}
      </Button>
    )
  }
)
