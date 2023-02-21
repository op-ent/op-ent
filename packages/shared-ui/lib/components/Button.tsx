export interface ButtonProps {
  children?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button {...rest} style={{ backgroundColor: 'green' }}>
      {children}
    </button>
  )
}
