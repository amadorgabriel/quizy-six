import { ReactNode } from 'react'

interface H1Props {
  children: ReactNode
}

export const H1 = ({ children, ...rest }: H1Props) => {
  return <h1 {...rest}>{children}</h1>
}
