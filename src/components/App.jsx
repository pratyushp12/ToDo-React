import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputComp from "./InputText";

function App() {
  
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return inputText === "" ? [...prevItems] : [...prevItems, inputText];
    });
    
  }

  function deleteItem(id) {
    setItems((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputComp 
      onClicked={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={todoItem}
              onchecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
