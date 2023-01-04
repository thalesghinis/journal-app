import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from './components/Button'

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
                <Button>Sign Up</Button>
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.line}>
          <div className={`${styles.column_50} ${styles.aligned}`}>
            <h2>Journal App</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
          <div className={`${styles.column_50} ${styles.aligned}`}>
          <h2>Journal App</h2>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </div>
      </div>
    </>
  )
}
