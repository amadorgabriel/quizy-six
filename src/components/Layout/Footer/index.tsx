import Link from 'next/link'
import * as React from 'react'

import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Open Source com
        <Link href='https://github.com/amador2014/QuizySix'>
          <a target='_blank'>@Github.</a>
        </Link>
      </p>
    </footer>
  )
}
