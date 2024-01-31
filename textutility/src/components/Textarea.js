import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {

  const handleUpper = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLower = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }

  const handleClear = () =>{
    setText("");
    props.showAlert("Text has been cleared", "success");
  }

  const handleCopy = () =>{
    let getText = document.querySelector("#floatingTextarea");
    getText.select()
    navigator.clipboard.writeText(getText.value)
    document.getSelection().removeAllRanges()
    props.showAlert("Text is copied to clipboard", "success");
  }

  const handlechange = (evt) =>{
    setText(evt.target.value);
  }

  const [text,setText] = useState('Enter text here');
  
  return (
    <>
    <div className='container' style={{ color: props.mode==='dark'?'whitesmoke':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-floating mb-3">
            <textarea className="form-control" rows="8" value={text} id="floatingTextarea" onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'rgb(63 63 70)':'white', height:"auto", color: props.mode==='dark'?'whitesmoke':'black'}}>
            </textarea>
        </div>

        <button disabled={text.length===0} type="button" className="btn btn-dark m-3" onClick={handleUpper}>Convert to Uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-dark m-3" onClick={handleLower}>Convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-dark m-3" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-dark m-3" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className='container my-2' style={{ color: props.mode==='dark'?'whitesmoke':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
      <p>{(0.008) * (text.split(" ").filter((ele)=>{return ele.length!==0}).length)} Minutes Read</p>  
      {/* 1 min = 125 words .   1 word = 1/125 = 0.008 min */}
    </div>
    </>
  )
}

Textarea.propTypes = {
    heading : PropTypes.string.isRequired
}
