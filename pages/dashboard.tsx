import React, { useState } from 'react';
import { StyledContainerDashboard, StyledFunctions, StyledContent, StyledText } from "../styles/StyledDashdobard"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'

const TextEditor = dynamic(() => import('./components/textEditor/Texteditor'), {
    ssr: false
})

const config = {
  buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'source', 'brush']
};


export default function Dashboard() {
  const [value, setValue] = useState('')
  return (
    <>
     <StyledContainerDashboard>
      <StyledFunctions></StyledFunctions>
      <StyledContent>
        <StyledText>
          <TextEditor setValue={setValue} config={config} tabIndex={1}/>
          <br />
           {value}
        </StyledText>
      </StyledContent>
     </StyledContainerDashboard>
    </>
  )
}
