import React, {useState} from 'react';


function TodoList(props) {
  const todoList = props.list;


  return (
    <div>
      {todoList.map(el=><li>{el.title}</li>)};



    </div>
  );
}

export default TodoList;
