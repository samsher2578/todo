
import { useState } from 'react';
import './App.css';
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

            {item.map((itemval) => {
              return <ToDoList text = {itemval} />;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
