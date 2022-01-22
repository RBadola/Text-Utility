import React, { useState } from 'react';

const TextForm = (props) => {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () => {
        setText("")
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleDspace = () => {
        let newtext = text.replace(/\s+/g, " ");
        setText(newtext)
    }
    let texts = text.replace(/[ ]+/g, "");

    let Words = text.split(" ").filter((v) => {
        return v !== '';
    });
    console.log(Words)

    return <div>
        <div className="container mb-3 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

            <h3>{props.heading}</h3>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows={8} style={{ backgroundColor: props.mode === 'dark' ? 'Grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} />
            <button className='btn btn-primary my-2 mx-1' onClick={handleUpClick}> Convert to Uppercase</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleClear}> Clear Text</button>
            <button className="btn btn-primary my-2 mx-1" onClick={handleDspace}> Remove  space</button>
        </div>
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h3>Your text summary</h3>
            <p>{Words.length} Words and {texts.length} chracters</p>
            <p>{0.008 * Words.length} minute to read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>

    </div >;
};

export default TextForm;
