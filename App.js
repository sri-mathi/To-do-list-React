import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import Additem from "./Additem";
import Searchitem from "./Searchitem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL = 'http://localhost:3002/items';
  const [items,setItems] = useState([]);
  const [newitem,setNewitem]=useState('')
  const [search,setSearch]=useState('')
  const [fetchError,setFetchError] = useState(null)
  const [isLoading,setIsLoading] = useState(true)
  useEffect(()=>{
   const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      console.log(response)
      if(!response.ok) throw Error("Data not Received")
      const listItems = await response.json();
      setItems(listItems)
      setFetchError(null)
    }
    catch(err){
      setFetchError(err.message)
    }finally{
      setIsLoading(false)
    }
   }
   setTimeout(()=>{
   (async () => await fetchItems())()
  },2000)
  },[])

  const handleClick=async(id)=>{
    const listItems = items.map((item)=>(item.id===id)?{...item,checked:!item.checked}:item)
    setItems(listItems)
    const myItem = listItems.filter((item)=>item.id==id)
    const updateOptions ={
      method:'PATCH',
      header:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,updateOptions)
    if(result) setFetchError(result)
  }
  const handleDelete=async(id)=>{
    const listItems = items.filter((item)=>(item.id!=id))
    setItems(listItems)
    const deleteOptions ={
      method:'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const result = await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)
  }
  const addItem = async(item)=>{
    const id = items.length ? items[items.length -1].id+1 : 1;
    const addNewItem = {
      id, checked:false, item
    }
    const listItems = [...items,addNewItem]
    setItems(listItems)

    const postOptions ={
      method:'POST',
      header:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL,postOptions)
    if(result){
      setFetchError(result)
    }
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log('submitted')
    if(!newitem) return;
    addItem(newitem)
    setNewitem('')
  }
  return (
    <div className="App">
      <Header/>
      <Additem
      newItem = {newitem}
      setNewitem ={setNewitem}
      handleSubmit = {handleSubmit}
      />
      <Searchitem 
      search={search}
      setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p>{`Error:${fetchError}`}</p>}
      {!isLoading && !fetchError && <Content
      items={items.filter(item=>((item.item).toLowerCase()).includes(search))}
      handleClick={handleClick}
      handleDelete={handleDelete}
      />}
      </main>
      <Footer
      length={items.length}
      />
    </div>
  );
}

export default App;
