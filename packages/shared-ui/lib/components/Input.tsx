import React, { forwardRef, useId } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'

const styles = tv({
  slots: {
    wrapper: [
      'focus-within:border-transparent focus-within:ring focus-within:ring-primary-300 dark:focus-within:ring-primary-600',
      'border border-neutral-200 dark:border-neutral-700',
      'bg-neutral-50 dark:bg-neutral-800',
      'mb-4 rounded-md px-3 pt-2 pb-1 shadow-sm',
    ],
    label:
      'block text-xs font-medium select-none text-neutral-500 dark:text-neutral-400',
    input: [
      'text-neutral-800 placeholder-neutral-300 dark:text-neutral-100 dark:placeholder-neutral-600',
      'focus:outline-none focus:ring-0',
      'w-full border-0 bg-transparent p-0 text-sm leading-loose',
    ],
  },
})

type InputVariants = VariantProps<typeof styles>

export interface InputProps extends InputVariants {
  as?: React.ElementType
  label: string
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
      label: _label,
      id = _id,
      className,
      ...inputProps
    } = props
    const { wrapper, label, input } = styles()
    const Component = as as React.ElementType

    return (
      <div className={wrapper()}>
        <label htmlFor={id} className={label()}>
          {_label}
        </label>
        <Component
          ref={ref}
          {...inputProps}
          id={id}
          className={input({ className })}
        />
      </div>
    )
  }
)
