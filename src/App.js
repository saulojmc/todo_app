import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads, we need to database and fetch new todos as they get added/removed
  useEffect(() => {
    //this code here...fires when the app.js load.
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //will stop the refresh 

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(''); // clear up the input after clicking add todo button
  }


  return (
    <div className="App">
      <h1>Adicione as Tarefas a serem feitas!</h1>
      <form>
        <FormControl>
          <InputLabel> Escreva sua tarefa</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        {/* <button type="submit" onClick={addTodo} >Adicione Tarefas</button> */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Adicione Tarefas
        </Button>
      </form>
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
