import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'
function Additem({newitem,setNewitem,handleSubmit}) {
 const inputRef =useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addItem'>Add Item</label>
        <input 
        autoFocus
        ref={inputRef}
        id='addItem'
        type='text'
        placeholder='Add Item'
        required
        value = {newitem}
        onChange ={(e)=>setNewitem(e.target.value)}
        />
        <button 
        type='submit'
        aria-label='Add Item'
        onClick={()=>inputRef.current.focus()}
        >
          <FaPlus/>
        </button>
    </form>
  )
}

export default Additem