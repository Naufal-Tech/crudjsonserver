import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function Content() {

    const [items, setItems] = useState([

    {
        id: 1,
        checked: false,
        item: "Belajar ReactJs"
    },
    {
        id: 2,
        checked: false,
        item: "Belajar Rest-API"
    },
    {
        id: 3,
        checked: false,
        item: "Belajar MVC"
    }
]);

const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
}

const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
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
        {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
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
