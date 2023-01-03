import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Buttons from './components/Buttons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.container_1}>
        <div className={styles.line}>
          <div className={styles.column_50}>
            <Image src='/images/Cores_principais.png' width={900} height={900} alt="Ornamento da tela" />
          </div>
          <div className={styles.column_50}>
            <div className={styles.journal}>
              <h1>Journal App</h1>
              <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
              <div className={styles.btn_component}>
                <Buttons>Sign Up</Buttons>
                <Buttons>Sign In</Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.line}>
          <div className={`${styles.column_50} ${styles.how_works}`}>
            <h2>Journal App</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className={`${styles.column_50} ${styles.how_works}`}>
          <h2>Journal App</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
    </>
  )
}
