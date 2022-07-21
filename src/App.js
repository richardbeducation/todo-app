import { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import { db } from './firebase'
import firebase from 'firebase/compat/app'

function App() {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        item: doc.data()
      })))
    })
  }, [input])

  const addTodo = (e) => {
    e.preventDefault()

    // setTodos([...todos, input])

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }
  return (
    <div className="App">
      <h1>My ToDo List</h1>
      <form>
        <input value={input} onChange={e => setInput(e.target.value)}/>
        <button type='submit' onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map(todo => <Todo key={todo.id } arr={todo}/>)}
      </ul>
      
    </div>
  );
}

export default App;
