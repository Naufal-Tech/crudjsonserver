import React from 'react'

export default function Header({title}) {

// const headerStyle = {
//     backgroundColor: 'royalblue',
//     color: '#ffff'
// };

  return (
    <header 
        // backgroundColor: 'mediumblue',
        // color: '#ffff'
    >
        <h1>{title}</h1>
    </header>
  )


}

Header.defaultProps = {
  title: "Default title"
}
