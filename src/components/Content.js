import React from 'react'
import TodoList from './TodoList'



export default function Content({ todos, handleCheck, handleDelete}) {

   


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
    <>
        {todos.length ? (
        <TodoList 
            todos={todos}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
        ) : (
            <p style={{ marginTop: '2rem' }}>There is no todolist.</p>
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
    </>
  )
}
