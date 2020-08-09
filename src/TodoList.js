import React, {useState} from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {
const {updatedTodo, deleteButton,markTodo, moveUp} = props;
    return (
        <div>
            {props.list.map((el, index) => {
                const isElemLast = index === props.list.length - 1
               return <TodoListItem
                    el={el}
                    updatedTodo={updatedTodo}
                    deleteButton={deleteButton}
                    markTodo={markTodo}
                    index={index}
                    moveUp={moveUp}
                    isElemLast={isElemLast}
                />})}

        </div>
    );
}

export default TodoList;
