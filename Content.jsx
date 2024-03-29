import React from 'react';
import Itemlist from './Itemlist';
const Content =({items,handleClick,handleDelete}) =>{
return (
<>
  {(items.length)?(
<Itemlist
  items={items}
  handleClick={handleClick}
  handleDelete={handleDelete}
/>
  ):(
    <p>
      Your List is Empty!
    </p>
  )}
</>
  )
}
export default Content