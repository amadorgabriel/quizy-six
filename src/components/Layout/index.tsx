import Head from 'next/head'
import Link from 'next/link'
import { H2 } from '../Typografy'
import { Cursor } from './Cursor'

import styles from './Layout.module.scss'

interface LayoutProps {
  title?: string
  hasFooter?: boolean
  hasHeader?: boolean
  children: React.ReactNode
}

export const Layout = ({
  title = `Quizy`,
  children,
  hasHeader = false,
  hasFooter = false,
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

        {hasFooter && (
          <footer className={styles.footer}>
            <p>
              Avaliable on
              <Link href='https://github.com/amador2014/QuizySix'>
                <a target='_blank'>@Github.</a>
              </Link>
            </p>
          </footer>
        )}
      </div>

      {/* <Cursor /> */}
    </>
  )
}
