import Head from 'next/head';
import Link from 'next/link';

import styles from '@/styles/Home.module.scss';
import { Loader } from '@/components/Loader';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <div className={styles.container}>
      <Head>
        <title>Quizy Six.</title>
      </Head>

      <main className={styles.content}>
        <div className={styles.header}>
          <div className={styles.shapesWrapper}>
            <span className={styles.circle}></span>
            <span className={styles.triangle}></span>
            <span className={styles.square}></span>
          </div>

          <h1>QuizySix</h1>
          <p>Uma plataforma de quiz imersiva baseada na série round 6.</p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div>
              <h3>Pokémon</h3>
              <p>6 Rounds</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <h3>Pokémon</h3>
              <p>6 Rounds</p>
            </div>
          </div>
          <div className={`${styles.card} ${styles.createQuiz}`}>
            <div>
              <p>Em Breve</p>
              <h3>Crie seu quiz personalizado</h3>
            </div>
          </div>
          <div className={`${styles.card} ${styles.comingSoon}`}>
            <p>Em Breve..</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Avaliable on
          <Link href="https://github.com/amador2014/QuizySix">
            <a target="_blank">@Github.</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
