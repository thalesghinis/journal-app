
import React, { useRef, useState, useMemo } from 'react'
import JoditEditor from 'jodit-react'
import axios from 'axios'
import Button from '../button/Button'
import { RadioButton } from '../radio/RadioButton'
import { StyledButton } from '../../../styles/StyledGlobal';

const Editor = () => {
  const editor = useRef(null)
  const [content, setContent] = useState('')
  const [visible, setVisible] = useState("everyone");

  const radioChangeHandler = (e) => {
    setVisible(e.target.value);
  };

  const config = {
    readonly: false,
    style: {
      background: '#fff',
      color: '#000',
  },

  };

  const handleChange = (newContent: string) => {
    setContent(newContent);
  };

  const sendText = async (evt) => {
    evt.preventDefault();
    
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
          <h5>Visibilidade</h5>
          <div className="radio-btn-container" style={{ display: "flex" }}>
        <RadioButton
          changed={radioChangeHandler}
          id="1"
          isSelected={visible === "friends"}
          label="Apenas para amigos"
          value="friends"
        />

        <RadioButton
          changed={radioChangeHandler}
          id="2"
          isSelected={visible === "everyone"}
          label="Para todos"
          value="everyone"
        />
      </div>
      {visible === "friends" && (
        <span style={{ color: '#000' }}>Apenas amigos irão ver meu texto</span>
      )}
      <h4 style={{ color: '#000' }}>
        The selected radio button value is = {visible}
      </h4>
      <StyledButton>
        <Button buttonName='Enviar' handleClick={sendText}/>
      </StyledButton>
    </>
)
}
export default Editor

/* const config = Jodit.make('#editor', {
  readonly: false,
  colors: ['#ff0000', '#00ff00', '#0000ff']
}); */