
import { useState } from 'react';
// import './App.css';
import ToDoList from './ToDoList';

function App() {

  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }; 

  const itemList = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    })

    setInputList("");
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItem((oldItem) => {
      return oldItem.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder='Add a Item' value={inputList} onChange={itemEvent}/>
          <button onClick={itemList}> + </button>

          <ol>

            {item.map((itemval, index) => {
              return <ToDoList key={index} id={index} text = {itemval}  onSelect = {deleteItem}/>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;