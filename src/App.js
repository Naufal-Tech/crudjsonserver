import Content from './components/Content';
import Header from './components/Header'
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import SearchTodo from './components/SearchTodo';
import apiRequest from './components/apiRequest';

function App() {
  const API_URL = 'http://localhost:3500/todos';
  
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  // JSON.parse(localStorage.getItem('todolist')) || 

  useEffect (() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Not Expected');
        const listTodos = await response.json();
        setTodos(listTodos);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchTodos())();
    }, 2000)

    // localStorage.setItem('todolist', JSON.stringify(todos));
  }, [])

//   const [items, setItems] = useState([
//     {
//         id: 1,
//         checked: true,
//         item: "One half pound bag of Cocoa Covered Almonds Unsalted"
//     },
//     {
//         id: 2,
//         checked: false,
//         item: "Item 2"
//     },
//     {
//         id: 3,
//         checked: false,
//         item: "Item 3"
//     }
// ]);

  
  // const setAndSaveTodos = (newTodos) => {
  //   setTodos(newTodos);
    
  // }

  const addTodo = async (todo) => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
    const myNewTodo = { id, checked: false, todo};
    const listTodos = [...todos, myNewTodo];
    setTodos(listTodos);

    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(myNewTodo)
    }
    const result = await apiRequest(API_URL, postOptions)
    if (result) setFetchError(result);
  }


  const handleCheck = async (id) => {
    const listTodos = todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo);
    setTodos(listTodos);

    const myTodo = listTodos.filter((todo) => todo.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myTodo[0].checked})
  };
  const reqUrl = `${API_URL}/${id}`;
  const result = await apiRequest(reqUrl, updateOptions);
  if (result) setFetchError(result);
}

  const handleDelete = async (id) => {
    const listTodos = todos.filter((todo) => todo.id !== id);
    setTodos(listTodos);

    const deleteOptions = {method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    console.log(newTodo);
    // add Todo
    addTodo(newTodo);
    setNewTodo('');
    
  }

  return (
    <div className="App">
      <Header title="Todo-List" />
      <AddTodo 
      newTodo = {newTodo}
      setNewTodo = {setNewTodo}
      handleSubmit = {handleSubmit}
      />
      <SearchTodo 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Todo List...</p>}
        {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          todos = {todos.filter(todo => ((todo.todo).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer length={todos.length}/>
    </div>
  );
}

export default App;
