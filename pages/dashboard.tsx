import React, { useState } from 'react';
import { StyledContainerDashboard, StyledFunctions, StyledContent, StyledText } from "../styles/StyledDashdobard"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'
import axios from 'axios';
//import TextArea from './components/textEditor/Texteditor';


const Editor = dynamic(() => import('./components/textEditor/Texteditor'), {
  ssr: false
})

export default function Dashboard() {
 
return (
    <>
     <StyledContainerDashboard>
      <StyledFunctions></StyledFunctions> 
      <StyledContent>
        <StyledText 
         // onSubmit={sendText}
        >
          <Editor />
          <br />
        </StyledText>
      </StyledContent>
     </StyledContainerDashboard>
    </>
  )
}
