import React from "react"
import './Task.css'
function Square({colorValue,hexValue,isDarkText}) {
  return (
    <div className='Task'>
    <div className='box' 
    style={{
     backgroundColor:colorValue,
     color: isDarkText? "#000":"#FFF"
    }}>
     <p>{colorValue? colorValue : "Empty Value"}</p><br></br>
     <p>{hexValue? hexValue : null}</p>
    </div>
    
    </div>
  )
}

export default Square;