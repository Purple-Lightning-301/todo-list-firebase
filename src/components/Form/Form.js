import React from "react";
import "../Form/Form.css"

function Form(props) {
// check onchange from input field
const inputTextHandler = (e) => {
    
    props.setInputText(e.target.value);
}
const submitToDoHandler = (e) => {
    const inputObject = {text: props.inputText, completed: false, id: Math.round(Math.random() *100)};
    e.preventDefault();
    props.setToDos([
        ...props.toDos, inputObject
    ]);
    props.pushFirebase(inputObject);
    props.setInputText("");
}
const statusHandler = (e) => {
  props.setStatus(e.target.value)
}
  return (
    <div>
      <div className="content">
        <form>
          <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={submitToDoHandler} type="submit">
            <i className="fas fa-plus-square" />
          </button>
        </form>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Form;
