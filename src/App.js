import React, {useState} from 'react';
import TodoController from "./TodoController";
import TodoList from "./TodoList";


function App() {
    const initialState = [
        {id: 1, title: 'First to do', done: false},
        {id: 2, title: 'Second to do', done: false},
        {id: 3, title: 'Third to do', done: false}
    ]
    const [list, setList] = useState(initialState);

    const addNewTodo = (newTitle) => {
        const newTodo = {id: Math.round(Math.random() * 10), title: newTitle, done: false}
        const newList = [...list, newTodo];
        setList(newList);

    }


    return (
        <div>
            <TodoController addNewTodo={addNewTodo}/>
            <TodoList list={list}/>


        </div>
    );
}

export default App;
