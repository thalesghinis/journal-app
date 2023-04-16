
import React, { useRef, useState, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import button from 'antd/es/button'
import axios from 'axios'
import Button from '../button/Button'

const Editor = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config = {
    readonly: false,
  };

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  const sendText = async (event) => {
    /**
     * Fazer validação do front end aqui!
     */
    event.preventDefault();
    
    const data = {
      text: content
    }

    try {
      const url = '/api/journalentry';
      const response = await axios.post(url, data);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data.data);
    }
  };  

  return (
    <>
      <JoditEditor ref={editor} config={config} onBlur={handleChange} value={''} />         
      <Button buttonName='Enviar' handleClick={sendText}/>
    </>
)
}
export default Editor