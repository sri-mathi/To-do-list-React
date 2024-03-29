import React from "react";
import './Task.css'
import colornames from 'colornames'
const Input = ({
colorValue,setcolorValue, setHexValue, isDarkText,setIsDarkText
}) => {
    return (
        <form onSubmit={(e)=>e.preventDefault()}>
          <br></br><input
          autoFocus
          type="text"
          placeholder="Add color name"
          required
          value={colorValue}
          onChange={(e)=>{
            setcolorValue(e.target.value);
            setHexValue(colornames(e.target.value));
          }}
          /><br></br> <br></br>
          <button style={{width:"250px"}}
          type="button"
          onClick={()=>setIsDarkText(!isDarkText)}
          >
            Toggle text Color
          </button>
          
        </form>

    )
}
export default Input