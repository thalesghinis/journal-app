import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { SessionProvider } from  'next-auth/react';

import Layout from './components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout onClick={function (): void {
        throw new Error('Function not implemented.')
      } } name={''}>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
