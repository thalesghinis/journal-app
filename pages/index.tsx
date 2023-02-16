import React from 'react';
import Button from './components/button/Button'
import { StyledBgColor, StyledImage, StyledJournal, StyledAligned, StyledMain } from "./StyledIndex";

// <StyledImage className="dn db-l mw-none" src='/images/ornamento.png' width={807} height={454} alt="Ornamento da tela" />
//<div className="fl-l w-100 w-50-l pa2">
        //  </div>
export default function Home() {
  return (
    <StyledMain>
      <StyledBgColor>
        <div className="cf ph2-ns">
          
          <StyledJournal>
            <h1 className='bold f-5'>Words are powerful.</h1>
              <p className='f3-m f4'>
                Meet the journal app and save your ideas, thoughts, 
                share with friends and more.... 
              </p>
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
          <StyledAligned className="tc w-50 w-30-l">
            <h2>Journal App</h2>
            <p className='f3'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
          </StyledAligned>
        </div>
      </StyledBgColor>
    </StyledMain>
  )
}
