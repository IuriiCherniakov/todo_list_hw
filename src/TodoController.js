import React, {useState} from 'react';


function TodoController(props) {
const [newTodo, setNewTodo] = useState('');
const inputChange = (e) => setNewTodo(e.target.value);
const buttonAdd = () => {
    props.addNewTodo(newTodo);
    setNewTodo('');
}

    return (
    <div>
      <input onChange={inputChange} value={newTodo}/>
      <button onClick={buttonAdd}>ADD</button>



    </div>
  );
}

export default TodoController;
