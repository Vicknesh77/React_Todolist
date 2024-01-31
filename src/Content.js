import React from 'react';
import ItemsList from './ItemsList';

const Content = ({items,handleCheck,handleDel}) => {  // arugument in the function is props  sharing components each other through argument is props and drilling
   

  return (
      <>
        {(items.length) ? (   //Javascript expression -> {}
          <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDel={handleDel}
          />
        )
    :(                        //Else Part
        <p style={{fontfamily:'lucida','Courier New': 'monospace'}}> <b>Your List is Empty</b></p>
    )}

      </>
  )
}
export default Content


