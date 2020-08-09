import React, {useState} from 'react';


function TodoController(props) {
    const [inputValue, setInputValue] = useState('')
    const addButton = () => {
        props.addNewTodo(inputValue);
        setInputValue('');
    }

    return (
        <div>
            <input onChange={(e)=> setInputValue(e.target.value)} value={inputValue} />
            <button onClick={addButton}>ADD</button>
        </div>
    );
}

export default TodoController;
