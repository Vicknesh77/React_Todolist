import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const Inputref = useRef()  //useRef_react focus
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item
        </label>
        <input
            autoFocus
            ref ={Inputref}
            type="text" 
            id="addItem" 
            name="addItem"
            placeholder='Add Item'
            required
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button 
          type='submit'
          aria-label='add item'
          onClick={() => Inputref.current.focus()}
        >
            <FaPlus/>
        </button>

    </form>
  
  )
}

export default AddItem;
