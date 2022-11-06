import React from 'react'

export default function Footer({length}) {

// const today = new Date();
  
return (
    <footer>
        <p>{length} Todo-List {length === 1 ? "todo" : "todos"}</p>
        {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
    </footer>
  )
}
