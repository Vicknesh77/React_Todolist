import React from 'react'
const Footer = ({length}) => {  // Length to find the length of the list

  // Using If...Else
  return (
      <footer>
         <p style={{margin:'1px',color:'whitesmoke'}}>{length} list in {length === 1  ? "Item" :"Items"}</p> 
      </footer>
  )
}

export default Footer
//{length} List in {length === 1 ? "Item" : "Items"}