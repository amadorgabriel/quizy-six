import Link from 'next/link'
import { Layout } from '@/components/Layout'
import { useCursor } from '@/hooks/useCursor'

import db from '../../db.json'
import styles from '@/styles/Home.module.scss'

interface Quiz {
  title: string
  rounds: number
  slug: string
}

export default function Home() {
  const { switchCursor } = useCursor()

  const mouseHoverHandler = {
    onMouseEnter: () => switchCursor(`hover`),
    onMouseLeave: () => switchCursor(`pulse`),
  }

  return (
    <Layout title='Quizzes' hasFooter>
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
              <a className={styles.card} {...mouseHoverHandler}>
                <div>
                  <h3>{quiz.title}</h3>
                  <p>{quiz.rounds} Rounds</p>
                </div>
              </a>
            </Link>
          ))}

          <div
            className={`${styles.card} ${styles.createQuiz}`}
            {...mouseHoverHandler}
          >
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
  )
}
