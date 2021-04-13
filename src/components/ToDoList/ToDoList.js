import React from "react";
import ToDo from "../ToDo/ToDo";
import "../ToDoList/ToDoList.css";

function ToDoList(props) {
    
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list" >
        {props.filterToDos.map(todo => (
            <ToDo key={todo.id} text={todo.text} toDos={props.toDos} setToDos={props.setToDos} todo={todo} pushFirebase = {props.pushFirebase} deleteFromFirebase = {props.deleteFromFirebase}/>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
