import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState , useEffect } from "react"; 
import { SearchItem } from './SearchItem';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import apiRequest from './apiRequest';

// Parent Component


function App() 
{
  const API_URL ='http://localhost:3200/items'
  const[items, setItems] = useState( [] ); //UseState Hook Initialization Array obj
  const[newItem, setNewItem] = useState("");
  const[search , setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const[isLoading , setIsLoading] =useState(true);

  useEffect(() =>
  {
    const fetchItems = async()=>{
      try{
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
      
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
    }
      catch(err){
        setFetchError(err.message);
      }
      finally{
        setIsLoading(false);
      }
  }
  setTimeout(() =>{
    (async ()=> await fetchItems())()
}, 1000)
  
},[])

const addItem = async (item)=>{
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = {id, checked: false, item};
    const listItems =[...items , addNewItem];
    setItems(listItems);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(API_URL,postOptions);
    if(result) setFetchError(result);
}



 // Map() used for iterate throgh the obj

const handleCheck = async (id) => {
    const listItems = items.map((item) =>  
    item.id === id ? {...item,checked : !item.checked} : item)  ;    //If .. Else shorthand
    setItems(listItems);                                         // setItems in the useState Hook
   const myItem = listItems.filter((item) => item.id === id);
   const updateOptions = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({checked:myItem[0].checked})
    };
    const reqURL = `${API_URL}/${id}`;
    console.log(reqURL)
    const result = await apiRequest(reqURL,updateOptions);
    if(result) setFetchError(result);
}
// filter() used for filter

const handleDel = async (id) =>{
    const listItems = items.filter((item) =>
    item.id !== id);      
    setItems(listItems);

    const deleteOptions ={
      method :'DELETE'
    };
   

    const reqURL = `${API_URL}/${id}`;
    const result = await apiRequest(reqURL,deleteOptions);
    if(result) setFetchError(result);

}

const handleSubmit=(e)=>{
    e.preventDefault()
    if(!newItem) return;
    console.log(newItem)
    //add item
    addItem(newItem)
    setNewItem('')
    
    
}

// Rendering part
  return (
    <div className="App">
      <Header />
      <AddItem
         newItem={newItem}
         setNewItem={setNewItem}
         handleSubmit={handleSubmit}
      /> 
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p ><AiOutlineLoading3Quarters className='loading' />Loading items</p>}
        {! isLoading && <Content 
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDel={handleDel}
      />}
      </main>
    
      <Footer
        length = {items.length}
      />
    </div>
  );
}

export default App;