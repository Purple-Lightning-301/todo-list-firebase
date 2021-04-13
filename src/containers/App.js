import "../containers/App.css";
import Form from "../components/Form/Form";
import ToDoList from "../components/ToDoList/ToDoList";
import React, { useState, useEffect } from "react";
import {db, auth} from "../services/firebase";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);
  //firebase databases
  
  useEffect(() => {
    // getLocal();
    getFirebase();
  }, [])
  useEffect(() => {
   filterHandler();
  //  saveLocalToDos();
  }, [toDos, status])

  const filterHandler = () => {
    switch(status){
      case "completed":
        setFilterToDos(toDos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilterToDos(toDos.filter(todo => todo.completed === false));
        break;
      default:
        setFilterToDos(toDos);
        break;
    }
  }
  //localStorage
  const saveLocalToDos = () => {
      localStorage.setItem('toDos', JSON.stringify(toDos));
  }
  const getLocal = () => {
    if(localStorage.getItem('toDos') === null){
      localStorage.setItem('toDos', JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("toDos"))
      setToDos(todoLocal);
    }
  }

  const getFirebase = () => {
    db.collection('todo-list-db') //find the collection todo-list-db
      .get() //get all document from todo-list-db collection
      .then( snapshot => {
        const todos = [];
        snapshot.forEach( doc => {
          const data = doc.data()
          const id = doc.id
          todos.push(data)
        })
        setToDos(todos)
        console.log(snapshot)
      })//do whatever when the data sent from firebase
      .catch(error => console.log(error)) 
  }

  const pushFirebase = (object) => {
    console.log("clicked");
    db.collection('todo-list-db')
      .add(object)
  }
  const deleteFromFirebase = (deleteID) => {
    console.log(deleteID)
    db.collection('todo-list-db')
      .get()
      .then( snapshot => {
        snapshot.docs.map( doc => {
          const data = doc.data()
          const id = doc.id
          if(doc.data().id == deleteID){
            db.collection('todo-list-db').doc(doc.id).delete().then(() => {
              console.log("delete successfully")
            })
          }
        })
      })
  }
  return (
    <div className="App">
      <div className="header">Todo-list</div>
      <Form
        toDos={toDos}
        setToDos={setToDos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus = {setStatus}
        pushFirebase = {pushFirebase}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} filterToDos={filterToDos} pushFirebase = {pushFirebase} deleteFromFirebase = {deleteFromFirebase}/>
    </div>
  );
}

export default App;
