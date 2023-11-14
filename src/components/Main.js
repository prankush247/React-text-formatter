import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Main(props) {
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const Copyf = () =>{
        navigator.clipboard.writeText(text)
        alert("Copied text in clipboard")
    }
    const upper = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }
    const lower = () =>{
        let newText = text.toLowerCase()
        setText(newText)
    }
    const strip = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
    }  
    const clearText = () =>{
        setText("")
    }  
    const [text,setText] = useState("")
  return (
    <div>
      <div className="container mt-5">
            <h1>{props.heading}</h1>
            <textarea value={text} onChange={handleOnChange} id="inputA" className="form-control" rows="8"></textarea>
        <p >Words - {text.split(" ").filter(word => word !== '').length} Characters - {text.length}</p>
        <button className="btn btn-primary mx-2 " onClick={Copyf}>Copy Text</button>
        <button className="btn btn-primary mx-2 " onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 " onClick={strip}>Remove extra spaces</button>
        <button className="btn btn-primary mx-2 " onClick={upper}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 " onClick={lower}>Convert to Lowercase</button>
        <div className='my-5'>
           <h2>Preview</h2>
            <p>{text}</p> 
        </div>
        
    </div>
    </div>
  )
}
Main.propTypes = {
    heading: PropTypes.string,
}
Main.defaultProps={
    heading:"Write your text here",
}