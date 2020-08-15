import React, {useEffect, useState} from 'react';
import TodoController from "./TodoController";
import TodoList from "./TodoList";
import axios from 'axios';

function App() {


    // const initialState = [
    //     {id: 1, title: 'First todo', done: false},
    //     {id: 2, title: 'Second todo', done: false},
    //     {id: 3, title: 'Third todo', done: false}]

    const [list, setList] = useState([]);

    const addNewTodo = async (newTitle, taskId) => {
        // const newTodo = {_id: Math.random(), title: newTitle, done: false};
        // const newList = [...list, newTodo];
        // setList(newList)
       await axios.post('http://localhost:5000/todo',{name:newTitle})
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            })

// //ОТПРАВЛЯЕМ ЗАПРОС НА СЕРВЕР, ИСПОЛЬЗУЯ ID ЭЛЕМЕНТА
//         await axios.get('http://localhost:5000/todo/${taskId}')
//             .then(function (response) {
//                 const listFromServer = response.data
//                 console.log(listFromServer);
//                 setList(listFromServer)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })

        await axios.get('http://localhost:5000/todo')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                console.log(error);
            })
      }

    const deleteButton = async (index) => {
        await axios.delete(`http://localhost:5000/todo/${index}`)
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            })

        await axios.get('http://localhost:5000/todo/')
            .then(function (response) {
                const listFromServer = response.data
                console.log(listFromServer);
                setList(listFromServer)
            })
            .catch(function (error) {
                console.log(error);
            })







    }

    const changeStatus = ({id, done}) => {
        const newStatus = list.map(el => {
            if (el._id === id) return {...el, done: done}
            return el
        })
        setList(newStatus)
    }
    const updatedTodo = (newTitle, id) => {

        const newList = [...list].map((el) => {
            if (el._id === id) return ({...el, title: newTitle})
            return el
        })
        setList(newList)
    }
    const markTodo = (id) => {
        const newList = list.map(el => {
            if (el._id === id)
                return ({...el, done: !el.done})
            return el
        })
        setList(newList)

    }
    const moveUp = (currentElementIndex, previousElementIndex) => {
        if (previousElementIndex < 0 || previousElementIndex >= list.length) return
        const newList = list.map((el, i) => {
            if (currentElementIndex === i) return list[previousElementIndex];
            if (previousElementIndex === i) return list[currentElementIndex];
            return el;
        })
        setList(newList)
    }

useEffect(()=> {
    axios.get('http://localhost:5000/todo')
        .then(function (response) {
            const listFromServer = response.data
            console.log(listFromServer);
            setList(listFromServer)
        })
        .catch(function (error) {
            console.log(error);
        })
    ;
},[])

    return (
        <div>
            <TodoController addNewTodo={addNewTodo}/>
            <TodoList
                list={list}
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
