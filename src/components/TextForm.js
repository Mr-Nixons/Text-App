import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
            console.log("Uppercase was clicked");
            let newText = text.toUpperCase();
            setText(newText);
    }

    const handleLwClick = ()=>{
      console.log("Lowercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
}

const clearText = ()=>{
  console.log("Clear The Text");
  let newText = "";
  setText(newText);
}

    const handleOnChange = (event)=>{
      console.log("On Change");
        setText(event.target.value);
}
    const [text, setText] = useState('');    //----> This is hook state
    // text = "new text" // wrong way to change the state
    // setText("New Text"); // Correcr way ti change the state

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
    <h2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="8" style={{backgroundColor: props.mode==='dark'?'#2a4061':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
    <button className="btn btn-primary ms-3" onClick={handleLwClick}>Convert To Lowercase</button>
    <button className="btn btn-primary ms-3" onClick={clearText}>Clear</button>
    </div>

    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p >{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minutes to Read</p>
      <h3 >Preview</h3>
      <p>{text.length>0?text:"Enter the text above to Preview it hear"}</p>

    </div>
    </>
  )
}
