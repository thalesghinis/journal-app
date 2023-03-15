import React, { useState } from 'react';
import { StyledContainerDashboard, StyledFunctions, StyledContent, StyledText } from "../styles/StyledDashdobard"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from 'next/dynamic'
import axios from 'axios';

const TextEditor = dynamic(() => import('./components/textEditor/Texteditor'), {
    ssr: false
})

const config = {
  buttons: ['bold', 'italic', 'underline', 'link', 'unlink', 'source', 'brush']
};


export default function Dashboard() {
  const [value, setValue] = useState({ text: '' })
  const [hasError, setHasError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('')

  const text = {
    text: 'hahahaa',
  };

  const sendText = async (e: { preventDefault: any; }) => {
    e.preventDefault()
    setHasError(''),
    setLoading(true)
    const json = await axios.post('/api/journalentry', text)
      if (json.data.text) {
        setMessage('Deu certo')
      } else {
       setMessage('deu ruim')
      }
  }; 
  // try catch
  //console.log(value, 'texto')

  return (
    <>
     <StyledContainerDashboard>
      <StyledFunctions></StyledFunctions> 
      <StyledContent>
        <StyledText onSubmit={sendText}>
          <>
            <TextEditor setValue={setValue} config={config} />
            <br />
            {value.text} 
            <button>Enviar aqui</button>
          </>
        </StyledText>
      </StyledContent>
     </StyledContainerDashboard>
    </>
  )
}
