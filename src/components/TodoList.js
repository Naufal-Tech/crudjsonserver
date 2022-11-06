import React from 'react'
import LineTodo from './LineTodo'

function TodoList({ todos, handleCheck, handleDelete }) {
  return (
    <ul>
        {todos.map((todo) => (
           <LineTodo
            key = {todo.id}
            todo = {todo}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
           />
        ))}
    </ul>
  )
}

export default TodoList