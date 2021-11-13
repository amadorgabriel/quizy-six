import { ReactNode } from 'react'

interface H2Props {
  children: ReactNode
}

export const H2 = ({ children, ...rest }: H2Props) => {
  return <h1 {...rest}>{children}</h1>
}
