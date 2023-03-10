import { forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { ComponentProps, PolymorphicRef } from '../types/polymorphic'

export const headingStyles = tv({
  base: 'font-bold',
  variants: {
    tag: {
      h1: 'text-7xl',
      h2: 'text-6xl',
      h3: 'text-5xl',
      h4: 'text-4xl',
      h5: 'text-3xl',
      h6: 'text-2xl',
    },
  },
  defaultVariants: {
    tag: 'h1',
  },
})

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
type HeadingTag = (typeof headingTags)[number]

type HeadingVariants = VariantProps<typeof headingStyles>

export interface HeadingProps extends HeadingVariants {
  as?: React.ElementType
  children?: React.ReactNode
}

type HeadingComponent = <C extends React.ElementType = 'h1'>(
  props: ComponentProps<C, HeadingProps>
) => React.ReactElement | null

export const Heading: HeadingComponent = forwardRef(
  <C extends React.ElementType = 'h1'>(
    props: ComponentProps<C, HeadingProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const {
      as = 'h1',
      children,
      className,
      tag = (() => {
        for (const headingTag of headingTags) {
          if (headingTag === as) return true
        }
        return false
      })()
        ? (as as HeadingTag)
        : 'h1',
      ...rest
    } = props
    const Component = as as React.ElementType

    return (
      <Component
        ref={ref}
        {...rest}
        className={headingStyles({ tag, className })}
      >
        {children}
      </Component>
    )
  }
)
