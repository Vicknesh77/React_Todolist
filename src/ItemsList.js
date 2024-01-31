import React from 'react'
import {LineItem}   from './LineItem';


 const ItemsList = ({items,handleCheck,handleDel}) => {
  return (
    <ul>
            {items.map((item) =>(   // map is used for iterate the obj array in Items
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDel={handleDel}
                />
                
            ))}
    </ul>
  )
}


export default ItemsList;