import { AppProps } from 'next/app'
import { CursorProvider } from '../hooks/useCursor'

import '@/styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  )
}
