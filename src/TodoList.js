import React, {useState} from 'react';


function TodoList(props) {

    return (
        <div>
            {props.list.map(el =>
                <li>
                    {el.title}
                    {el.done ? '✅' : ''}
                    <button onClick={()=>props.changeStatus({id:el.id, done: !el.done})}>{el.done ? 'Undone' : 'Done'}</button>
                    <button onClick={() => props.deleteButton(el.id)}>DELETE</button>
                </li>)}

        </div>
    );
}

export default TodoList;
