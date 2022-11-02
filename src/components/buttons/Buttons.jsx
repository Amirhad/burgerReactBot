 import React from 'react'
 
 function Buttons(props) {
   return (
     <button {...props} className={'button ' + props.className}/>
   )
 }
 
 export default Buttons