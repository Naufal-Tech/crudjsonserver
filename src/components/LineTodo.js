import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

function LineTodo({ todo, handleCheck, handleDelete })  {
  return (
    <li className="item">
        <input
            type="checkbox"
            onChange={() => handleCheck(todo.id)}
            checked={todo.checked}
        />
        <label
            style={(todo.checked) ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleCheck(todo.id)}
        >{todo.todo}</label>
        <FaTrashAlt
            onClick={() => handleDelete(todo.id)}
            role="button"
            tabIndex="0"
            aria-label={`Delete ${todo.todo}`}
        />
    </li>
  )
}

export default LineTodo