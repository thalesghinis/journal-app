
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

  function name() {
    var sayName = 'olá tatá'
    console.log(sayName)
    return true;
  }

  console.log(name());
  console.log(name());
  console.log(name());

  // console.log(content, 'text')

  const sendText = async () => {
    
  };  
  return (
    <>
      <JoditEditor ref={editor} config={config} onBlur={handleChange} value={''} />         
      <Button buttonName='Enviar' handleClick={sendText}/>
    </>
)
}
export default Editor