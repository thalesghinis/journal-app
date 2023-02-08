import React from 'react';
import Button from './components/button/Button'
import { signIn } from 'next-auth/react'

import { StyledBgColor, StyledImage, StyledJournal, StyledAligned } from "./Index.styled";


export default function Home() {
  return (
    <>
      <StyledBgColor>
        <div className="cf ph2-ns">
          <div className="fl-l w-100 w-50-l pa2">
            <StyledImage className="dn db-l mw-none" src='/images/ornamento.png' width={807} height={454} alt="Ornamento da tela" />
          </div>
          <StyledJournal className="fl-l w-100 w-50-l pa2 journal">
            <h1 className='bold f-5'>Journal App</h1>
            <p className='f3-m f4'>Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste Isso é um teste</p>
            <div className="flex-l btn_component">
              <Button buttonName="a"/>
              <Button buttonName="asdad"/>
            </div>
          </StyledJournal>
        </div>
        <div className="flex-l">
          <StyledAligned className="tc w-50 w-30-l">
            <h2>Journal App</h2>
            <p className='f3'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </StyledAligned>
          <StyledAligned className="tc pb7 w-50 w-30-l">
            <h2>Journal App</h2>
            <p className='f3 '>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </StyledAligned>
        </div>
      </StyledBgColor>
    </>
  )
}
