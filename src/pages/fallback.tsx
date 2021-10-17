import { useRouter } from 'next/router'
import { FlatButton } from '@/components/Button'
import { Layout } from '@/components/Layout'

import styles from '@/styles/Fallback.module.scss'
import React from 'react'

export default function Fallback() {
  const router = useRouter()

  return (
    <Layout title='Quiz | Modo Offline'>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.shapesWrapper}>
            <span className={styles.circle}></span>
            <span className={styles.triangle}></span>
            <span className={styles.square}></span>
          </div>

          <h1>Modo Offline</h1>
          <p>
            Parece que você está sem internet, mesmo assim salvamos a aplicação
            offline!
          </p>
        </div>

        <FlatButton
          label='Voltar ao Início'
          variant='success'
          onClick={() => {
            router.push(`/`)
          }}
        />
      </div>
    </Layout>
  )
}
