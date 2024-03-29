import React from 'react'
const Header = (props) => {
  return (
 <header>
    <h1 style={{marginLeft:"160px"}}>{props.title}</h1>
</header>
  )
}
Header.defaultProps ={
  title:"Srimathi E  -  To-do List"
}
export default Header