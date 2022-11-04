import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Content() {

    const [todos, setTodos] = useState([

    {
        id: 1,
        checked: false,
        todo: "Belajar ReactJs"
    },
    {
        id: 2,
        checked: false,
        todo: "Belajar Rest-API"
    },
    {
        id: 3,
        checked: false,
        todo: "Belajar MVC"
    }
]);

const handleCheck = (id) => {
    const listTodos = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(listTodos);
    localStorage.setItem('todolist', JSON.stringify(listTodos));
}

const handleDelete = (id) => {
    const listTodos = todos.filter((todo) => todo.id !== id);
    setTodos(listTodos);
    localStorage.setTodos('todolist', JSON.stringify(listTodos));
}

    // const [name, setName] = useState();
    // const [count, setCount] = useState(0);

    // const handleNameChange = () => {
    //     const names = ['Nugie', 'Naufal', 'Pasha'];
    //     const int = Math.floor(Math.random() * 3);
    //     setName(names[int]);
    //     // return names[int];
    //   }

    //   const handleClick1 = () => {
    //     setCount(count + 1)
    //     setCount(count + 1)
    //     console.log(count)
    //   }

    //   const handleClick0 = () => {
    //     console.log(count)
    //   }

    //   const handleClick = () => {
    //     console.log('You Clicked')
    //   }

    //   const handleClick2 = (names) => {
    //     console.log(`${names} was clicked`)
    //   }

    //   const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    //   }
    
  return (
    <main>
        {todos.length ? (
                <ul>
                    {todos.map((todo) => (
                        <li className="item" key={todo.id}>
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
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
            )}
        {/* <p onDoubleClick={handleClick}> */}
          {/* Hello {handleNameChange()}! */}
          {/* Hello {name}!
        </p> */}
        {/* <button onClick={handleNameChange}>Change Name</button>
        <button onClick={handleClick1}>Handle Count</button>
        <button onClick={handleClick0}>Handle Recount</button>
        <button onClick={() => handleClick2('Dave')}>Click Please?</button>
        <button onClick={(e) => handleClick3(e)}>Click Please?</button> */}
    </main>
  )
}
