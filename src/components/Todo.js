import React from 'react'

function Todo(props) {
  return (
    <div>
        <li>{props.text}<button onClick={() => props.onSelect(props.id)}>Delete</button></li>
    </div>
  )
}

export default Todo