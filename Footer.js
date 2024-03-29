import React from 'react'
function Footer({length}) {
const year=new Date();
  return (
    <footer>{length!==0?(
      <>{length} List {length==1?"item":"items"}</>
      ):"Empty"}
      <br></br>Copyright &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer