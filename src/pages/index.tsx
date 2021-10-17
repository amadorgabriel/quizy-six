import Head from 'next/head';

import styles from '@/styles/Home.module.scss';
import { Loader } from '@/components/Loader';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quizy Six.</title>
      </Head>

      <main className={styles.main}>
        <Loader />
      </main>
    </div>
  );
}
