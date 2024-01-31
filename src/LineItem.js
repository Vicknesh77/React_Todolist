import React from 'react'
import { FaTrash } from "react-icons/fa";

export const LineItem = ({item,handleCheck,handleDel}) => {
  return (
    
    <li className="item" key={item.id}>
                    <input type="checkbox" 
                    onChange={() => handleCheck(item.id)}
                    checked ={item.checked}
                    />
                    <label 
                    onClick={() => handleCheck(item.id)}
                    style={item.checked ? {textDecoration :"line-through"}:null}>   

                        {item.item}
                    </label>
                    <FaTrash 
                    role="button"
                    onClick={ () => handleDel(item.id)}
                    tabIndex="0"
                    aria-label={`Delete ${item.item} `}
                    />
    </li>

  )
}
