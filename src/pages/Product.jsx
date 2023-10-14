import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Product() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch your data from the API initially
    // You can use a GET request like the previous example
  }, []);

  const handleDelete = (id) => {
    // Remove the deleted item from the state
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}

          </li>
        ))}
      </ul>
    </div>
  );
}
//<DeleteButton id={item.id} onDelete={handleDelete} />




export default Product;