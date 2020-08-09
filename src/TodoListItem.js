import React, {useState} from 'react';


function TodoListItem(props) {
    const {el, updatedTodo, markTodo, deleteButton, index, moveUp, isElemLast} = props;
    const [editTitle, setEditTitle] = useState(el.title)
    const [editMode, setEditMode] = useState(false)
    const style = el.done === true ? {'textDecoration': 'line-through'} : null
    const editButtonHandler = () => {
        updatedTodo(editTitle, el.id)
        setEditMode(false)
        setEditTitle('')


    }
    const changeEditMode = () => {
        setEditMode(!editMode);
    }


    return (
        <div>

            <li style={style}>
                <input type='checkbox' checked={el.done} onClick={() => markTodo(el.id)}/>

                {editMode ? (
                    <>
                        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} type="text"/>
                        <button onClick={editButtonHandler}>Save</button>


                    </>
                ) : (
                    <>
                        {el.title}
                        {/*{el.done ? '✅' : ''}*/}
                        {/*<button onClick={() => props.changeStatus({*/}
                        {/*    id: el.id,*/}
                        {/*    done: !el.done*/}
                        {/*})}>{el.done ? 'Undone' : 'Done'}</button>*/}
                        <button onClick={() => props.deleteButton(el.id)}>DELETE</button>
                        <button onClick={() => moveUp(index, index -1)} disabled={!index}>↑</button>
                        <button onClick={() => moveUp(index, index +1)} disabled={isElemLast} >↓</button>
                    </>
                )

                }

                <button onClick={changeEditMode}>Edit</button>
            </li>

        </div>
    );
}

export default TodoListItem;
