import React from 'react'
import {db} from '../firebase'

const Todo = ({arr}) => {
  
  return (
    <ul>
    <li className='todolist'>
      {arr.item.todo}
      <button className='delete' onClick={() => {db.collection('todos').doc(arr.id).delete()}}>X</button>
    </li>
    
    </ul>
  )
}

export default Todo