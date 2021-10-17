import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Loader } from '@/components/Loader';

import styles from '@/styles/Home.module.scss';
import db from '../../db.json';
import { Layout } from '@/components/Layout';

interface Quiz {
  title: string;
  rounds: number;
  slug: string;
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Layout title="Carregando..">
      <Loader />
    </Layout>
  ) : (
    <Layout title="Quizzes" hasFooter>
      <div className={styles.content}>
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
          {db.quizes.map((quiz: Quiz, index) => (
            <Link href={`/quiz/${quiz.slug}`} key={index}>
              <a className={styles.card}>
                <div>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.rounds} Rounds</p>
                </div>
              </a>
            </Link>
          ))}

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
      </div>
    </Layout>
  );
}
