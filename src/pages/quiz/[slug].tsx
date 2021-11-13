import { Layout } from '@/components/Layout'
import { H1 } from '@/components/Typografy'

import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import db from '../../../db.json'

interface Question {
  title: string
  description: string
  answerIndex: number
  seconds: number
  points: number
  alternatives: string[]
}

interface Quiz {
  title: string
  rounds: number
  questions: Question[]
}

interface QuizProps {
  quizData: Quiz
}

export default function Quiz({ quizData }: QuizProps) {
  return (
    <Layout hasHeader title={`Quiz | ${quizData?.title}`}>
      <H1>{quizData?.title ?? `Em Breve..`}</H1>
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
