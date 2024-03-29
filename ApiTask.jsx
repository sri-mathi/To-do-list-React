import React from 'react'
import { useState,useEffect } from 'react'

function ApiTask() {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  const[reType,setRetype]=useState('users')
  const[items,setItems]=useState([])
  useEffect(()=>{
    const fetchitems = async () =>{
    try{
      const response = await fetch(`${API_URL}/${reType}`)
      console.log(reType)
      const data = await response.json()
      setItems(data)
    }catch(err){
        console.log(err.message)
    }
  }
  fetchitems()
},[reType])
const renderTableRows = () => {
    return items.map(item => (
      <tr key={item.id}>
        {Object.keys(item).map(key => (
          <td key={key}>{JSON.stringify(item[key])}</td>
        ))}
      </tr>
    ));
  };

  return (
    <>
       <button onClick={()=>setRetype('users')}>users</button>
       <button onClick={()=>setRetype('posts')}>posts</button>
       <button onClick={()=>setRetype('comments')}>comments</button>
       <br></br>
       <table>
        <thead>
          <tr>
            {Object.keys(items[0] || {}).map(key => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </>
  )
}

export default ApiTask