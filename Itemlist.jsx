import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
function Itemlist({items,handleClick,handleDelete}) {
  return (
    <ul>
    {items.map((item)=>(
    <li className="item" key={item.id}>
        <input
        type='checkbox'
        onClick={()=>handleClick(item.id)}
        checked={item.checked}
        />
        <label style={(item.checked)?{textDecoration:'line-through'}:null}
        onDoubleClick={()=>handleClick(item.id)}
        >{item.item}</label>
        <FaTrashAlt 
        role='button' 
        onClick={()=>handleDelete(item.id)} 
        tabIndex='0'
        aria-label={`Delete ${item.item}`}
        />
    </li>
    ))}
    </ul>
  )
}

export default Itemlist