import React from 'react';
import AlertTest from './AlertTest.js';


function Menu (props){
    
    let header = 'my-Menu';
   return (
       <div>
    <h1 className={header}>Main Menu</h1>
    <button onClick={AlertTest}>test</button>
    </div>
   )
}

export default Menu;