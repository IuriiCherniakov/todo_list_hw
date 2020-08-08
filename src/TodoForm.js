import React, {useState} from 'react';


function TodoForm(props) {
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

export default TodoForm;
