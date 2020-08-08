import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";


function App() {

    const initialState = [{id: 1, title: 'First todo', done: false}]

    const [list, setList] = useState(initialState);

    const addNewTodo = (newTitle) => {
        const newTodo = {id: Math.random(), title: newTitle, done: false};
        const newList = [...list, newTodo];
        setList(newList)
    }

    const deleteButton = (index) => {
        const delList = [...list].filter(el => el.id !== index);
        setList(delList)
    }

    const changeStatus = ({id, done}) => {
        const newStatus = list.map(el => {
            if (el.id === id) return {...el, done:done}
            return el
        })
        setList(newStatus)
    }


    return (
        <div>
            <TodoForm addNewTodo={addNewTodo}/>
            <TodoList list={list} deleteButton={deleteButton} changeStatus={changeStatus}/>

        </div>
    );
}

export default App;
