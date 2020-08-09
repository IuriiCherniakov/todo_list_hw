import React, {useState} from 'react';
import TodoController from "./TodoController";
import TodoList from "./TodoList";


function App() {

    const initialState = [
        {id: 1, title: 'First todo', done: false},
        {id: 2, title: 'Second todo', done: false},
        {id: 3, title: 'Third todo', done: false}]

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
            if (el.id === id) return {...el, done: done}
            return el
        })
        setList(newStatus)
    }
    const updatedTodo = (newTitle, id) => {

        const newList = [...list].map((el) => {
            if (el.id === id) return ({...el, title: newTitle})
            return el
        })
        setList(newList)
    }
    const markTodo = (id) => {
        const newList = list.map(el => {
            if (el.id === id)
                return ({...el, done: !el.done})
            return el
        })
        setList(newList)

    }
    const moveUp = (currentElement, previousElement) => {
        if(previousElement < 0 || previousElement >= list.length) return
       const newList = list.map((el, i)=> {
           if(currentElement === i) return list[previousElement];
           if(previousElement === i) return list[currentElement];
           return el;
       })
        setList(newList)
    }


    return (
        <div>
            <TodoController addNewTodo={addNewTodo}/>
            <TodoList
                list={list}
                deleteButton={deleteButton}
                changeStatus={changeStatus}
                updatedTodo={updatedTodo}
                deleteButton={deleteButton}
                markTodo={markTodo}
                moveUp={moveUp}
            />

        </div>
    );
}

export default App;
