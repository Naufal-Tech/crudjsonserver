import React from 'react'
import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'

function AddTodo({ newTodo, setNewTodo, handleSubmit }) {

    const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='addTodo'>Add Todo</label>
        <input
        autoFocus
        ref={ inputRef }
        id='addTodo'
        type='text'
        placeholder='Add Todo'
        required
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
        type='submit'
        aria-label='Add Todo'
        onClick={() => inputRef.current.focus()}
        >
        <FaPlus />
        </button>
    </form>
  )
}

export default AddTodo