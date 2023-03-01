import Head from 'next/head'
import { H2 } from '../Typografy'

import styles from './Layout.module.scss'

interface LayoutProps {
  title?: string
  hasHeader?: boolean
  children: React.ReactNode
}

export const Layout = ({
  title = `Quizy`,
  children,
  hasHeader = false,
}: LayoutProps) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
        </Head>

        {hasHeader && (
          <header>
            <nav>
              <H2>QuizySix</H2>
              <p>Round 1 / 6</p>
            </nav>
          </header>
        )}

        <main className={styles.content}>{children}</main>
      </div>
    </>
  )
}
