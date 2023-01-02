import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className={styles.linha}>
          <div className={styles.coluna_50}>
            <Image src='/images/Cores_principais.png' width={900} height={900} alt="Ornamento da tela"/>
          </div>
          <div className={styles.coluna_50}>
            <div className={styles.journal_app}>
              <h1>Journal App</h1>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
    </>
  )
}
