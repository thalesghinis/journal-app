import React, {useState, useRef, useMemo} from 'react';
import JoditEditor from "jodit-react";

const TextEditor = ({ setValue, config }) => {
    const editor = useRef(null)
    const [content, setContent] = useState({text: ''})

    const textContent = {
        text: content.text
    }

    return (
            <><JoditEditor
            ref={editor}
            value={textContent.text}
            config={config}
            onChange={(content) => setValue(content)} />
            <br />
            <button>Enviar</button></>
        );
}

export default TextEditor;