import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Button from './components/Button'

import picture from '../public/images/Cores_principais.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.bg_color}>
        <div className={["cf ph2-ns"].join(" ")}>
          <div className="fl-l w-100 w-50-l pa2">
            <Image className={[styles.image, "dn db-l"].join(" ")} src='/images/Cores_principais.png' width={807} height={454} alt="Ornamento da tela" />
          </div>
          <div className={[styles.journal, "fl-l w-100 w-50-l pa2"].join(" ")}>
            <h1 className='bold f-5'>Journal App</h1>
            <p className='f3-m f4'>Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste</p>
            <div className={[styles.btn_component, "flex-l"].join(" ")}>
              <Button>Sign Up</Button>
              <Button>Sign In</Button>
            </div>
          </div>
        </div>

        <div className={styles.container}>
          <div className={["flex-l"].join(" ")}>
            <div className={[styles.aligned, "tc"].join(" ")}>
              <h2>Journal App</h2>
              <p className='f3'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
            <div className={[styles.aligned, "tc"].join(" ")}>
              <h2>Journal App</h2>
              <p className='f3 teste'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
