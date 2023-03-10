import React,{useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper case was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text transformed to Upper case","success");
    }

    const handleOnChange =(event)=>{
        setText(event.target.value);
         
    }

    const handleLoClick = (event)=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Text transformed to Lower case","success");
    }

    const handleClearClick = (event)=>{
        let newText="";
        setText(newText);
        props.showAlert("Text cleared","success");
    }

    const handleCopy = () => {
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipbord","success");
    }

    const handleExtraSpace = () => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are handled","success");
    }

    const [text, setText] = useState('Enter Text Here'); 
    return (
    <div style={{color:  props.mode==='dark'?'white':'black' }}>
        <h1>{props.heading}</h1>
      <div className="mb-3">  
        <textarea className="form-control" value={text} style={{backgroundColor:   props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-primary my-3 mx-1" onClick={handleExtraSpace} >Handle Extra Spaces</button>
      </div>
      <div className="conatiner my-3" style={{color:  props.mode==='dark'?'white':'black'}} >
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008*text.split(" ").length} Minutes read.</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text:"Enter text above to preview here"}</p>
            
      </div>
    </div>
  );
}
