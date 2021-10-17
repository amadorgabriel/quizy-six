import Head from 'next/head';
import Link from 'next/link';

import styles from './Layout.module.scss';

interface LayoutProps {
  title?: string;
  hasFooter?: boolean;
  children: React.ReactNode;
}

export const Layout = ({
  title = `Quizy`,
  children,
  hasFooter = false,
}: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      <main className={styles.content}>{children}</main>

      {hasFooter && (
        <footer className={styles.footer}>
          <p>
            Avaliable on
            <Link href="https://github.com/amador2014/QuizySix">
              <a target="_blank">@Github.</a>
            </Link>
          </p>
        </footer>
      )}
    </div>
  );
};
