import React from 'react'
import { useState } from 'react'
import Square from './Square'
import Input from './Input'
function Task() {
    const [colorValue,setColorValue] = useState('')
    const [hexValue,sethexValue] = useState('')
    const [isDarkText, setIsDarkText ] = useState(true)
  return (
<>
<Square
colorValue={colorValue}
hexValue={hexValue}
isDarkText={isDarkText}/>
<Input
colorValue={colorValue}
isDarkText={isDarkText}
setcolorValue={setColorValue}
setHexValue={sethexValue}
setIsDarkText={setIsDarkText}/>
</>
  )
}

export default Task