import React, { useState } from 'react';
import "../ToDo/ToDo.css";

function ToDo(props) {
    const [editTextStatus, setEditTextStatus] = useState("hidden");

    const deleteHandler = () => {
        props.setToDos(props.toDos.filter(
            (element) => element.id !== props.todo.id
        ))
        props.deleteFromFirebase(props.todo.id)
    };

    const completeHandler = () => {
        props.setToDos(props.toDos.map(item => {
            if(item.id === props.todo.id){
                return {
                    ...item, completed: !item.completed
                }; 
            }
            return item;
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed":""}`}>{props.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i  className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default ToDo;