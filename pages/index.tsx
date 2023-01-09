import styles from '../styles/Home.module.css'
import Button from './components/button/Button'

import { StyledBgColor, StyledImage, StyledJournal, StyledAligned, StyledAlignedTwo } from "./Index.styled";


export default function Home() {
  return (
    <>
      <StyledBgColor>
        <div className="cf ph2-ns">
          <div className="fl-l w-100 w-50-l pa2">
            <StyledImage className="dn db-l mw-none" src='/images/ornamento.png' width={807} height={454} alt="Ornamento da tela" />
          </div>
          <StyledJournal className="fl-l w-100 w-50-l pa2">
            <h1 className='bold f-5'>Journal App</h1>
            <p className='f3-m f4'>Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste</p>
            <div className={[styles.btn_component, "flex-l"].join(" ")}>
              <Button>Sign Up</Button>
              <Button>Sign In</Button>
            </div>
          </StyledJournal>
        </div>

        <div className="flex-l">
          <StyledAligned className="tc">
            <h2>Journal App</h2>
            <p className='f3'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </StyledAligned>
          <StyledAlignedTwo className="tc">
            <h2>Journal App</h2>
            <p className='f3'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </StyledAlignedTwo>
        </div>
      </StyledBgColor>
    </>
  )
}
