import { Layout } from '@/components/Layout'
import { GetStaticPaths, GetStaticProps } from 'next'

import db from '../../../db.json'

interface Question {
  title: string
  description: string
  answerIndex: number
  seconds: number
  alternatives: string[]
}

interface Quiz {
  title: string
  rounds: number
  questions: Question[]
}

interface QuizProps {
  quiz: Quiz
}

export default function Quiz({ quiz }: QuizProps) {
  console.log(quiz)

  return (
    <Layout title={`Quiz | ${quiz?.title}`}>
      <h1>{quiz?.title ?? `Em Breve..`}</h1>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params

  let quizData = {} as Quiz

  db.quizes.map((quiz, index) => {
    if (quiz.slug === slug) {
      quizData = {
        title: db.quizes[index].title,
        rounds: db.quizes[index].rounds,
        questions: db.quizes[index].questions,
      }
    }
  })

  return {
    props: {
      quizData,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = db.quizes.map((quiz) => {
    return {
      params: {
        slug: quiz.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
