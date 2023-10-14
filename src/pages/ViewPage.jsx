// OtherPage.js
import React from 'react';
import  { useUserData } from './Context';

function ViewPage({}) {
    const { data,  } = useUserData();
 
  

  return (
    <div className="App">
        <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.AssociateID}{' '}
           
          
        
          </li>
         
        ))}
      </ul>
    </div>
  );
}



export default ViewPage;
