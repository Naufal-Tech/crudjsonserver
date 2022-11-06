import React from 'react'

function SearchTodo({ search, setSearch }) {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input 
        id='search'
        type='text'
        role='searchbox'
        placeholder='Search Todos'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchTodo