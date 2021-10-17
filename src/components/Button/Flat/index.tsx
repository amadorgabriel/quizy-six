import { ButtonHTMLAttributes } from 'react'
import styles from '../Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'success' | 'error'
  label: string
}

export const FlatButton = ({
  label,
  variant = `success`,
  ...rest
}: ButtonProps) => {
  return (
    <button {...rest} className={`${styles.flatButton} ${styles[variant]}`}>
      {label}
    </button>
  )
}
