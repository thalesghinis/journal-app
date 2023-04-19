import React, { useState } from 'react';
import { StyledContainerDashboard, StyledFunctions, StyledContent, StyledText } from "../styles/StyledDashdobard"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'
import axios from 'axios';
import { StyedJoditDiv } from "./components/jodit/StyledJodit"
import Jojodit from './components/jodit/Jodit';
import { userInfo } from 'os';
import { StyledInput } from '../styles/globals';

const Editor = dynamic(() => import('./components/textEditor/Texteditor'), {
  ssr: false
})

export default function Dashboard() {
  const [title, setTitle] = useState({ text: ""});
return (
    <>
     <StyledContainerDashboard> 
      <StyledFunctions></StyledFunctions> 
      <StyledContent>
        <StyledText>
          <h5>Título</h5>
        <StyledInput
            value={title.text}
            //onChange={({ target }) =>
              //setUserInfo({ ...userInfo, email: target.value })
            //}
            placeholder="Escreva o título aqui"
            //disabled={loading}
          />
        </StyledText>
        <StyledText>
          <h5>Texto</h5>
          <Editor />
        </StyledText>
       
      </StyledContent>
     </StyledContainerDashboard>
    </>
  )
}