import React, { forwardRef, useId } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'
import { ResizablePanel } from './ResizablePanel'

export const inputStyles = tv({
  slots: {
    wrapper: [
      'focus-within:border-transparent focus-within:ring focus-within:ring-primary-300 dark:focus-within:ring-primary-600',
      'border border-neutral-200 dark:border-neutral-700',
      'bg-neutral-50 dark:bg-neutral-800',
      'rounded-md px-3 pt-2 pb-1 shadow-sm transition-all',
    ],
    label:
      'block text-xs font-medium select-none text-neutral-500 dark:text-neutral-400',
    input: [
      'text-neutral-800 placeholder-neutral-300 dark:text-neutral-100 dark:placeholder-neutral-600',
      'focus:outline-none focus:ring-0',
      'w-full border-0 bg-transparent p-0 text-sm leading-loose',
    ],
    error: 'text-danger-600 mt-2 text-sm',
  },
  variants: {
    hasError: {
      true: {
        wrapper:
          'border-transparent ring-2 ring-danger-300 dark:ring-danger-600',
      },
    },
  },
  defaultVariants: {
    hasError: false,
  },
})

type InputVariants = VariantProps<typeof inputStyles>

export interface InputProps extends InputVariants {
  as?: React.ElementType
  label: string
  error?: string
}

type InputComponent = <C extends React.ElementType = 'input'>(
  props: ComponentProps<C, InputProps>
) => React.ReactElement | null

export const Input: InputComponent = forwardRef(
  <C extends React.ElementType = 'input'>(
    props: ComponentProps<C, InputProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const _id = useId()
    const {
      as = 'input',
      label,
      id = _id,
      className,
      error,
      ...inputProps
    } = props
    const hasError = error !== undefined
    const {
      wrapper: wrapperStyles,
      label: labelStyles,
      input: _inputStyles,
      error: errorStyles,
    } = inputStyles({ hasError })
    const Component = as as React.ElementType

    return (
      <div>
        <div className={wrapperStyles()}>
          <label htmlFor={id} className={labelStyles()}>
            {label}
          </label>
          <Component
            ref={ref}
            id={id}
            className={_inputStyles({ className })}
            {...inputProps}
          />
        </div>
        <ResizablePanel>
          <p
            role="alert"
            hidden={!hasError}
            aria-hidden={!hasError}
            className={errorStyles()}
          >
            {error || ''}
          </p>
        </ResizablePanel>
      </div>
    )
  }
)
