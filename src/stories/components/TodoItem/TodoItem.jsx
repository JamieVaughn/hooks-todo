import React, { useState, useContext } from 'react'
import cssm from './todoitem.module.scss'
import {AppContext} from '../Todo/Todo'



const defaultProps = {id: 1, text: 'fallback', done: false, deleted: false}

function TodoItem (props = defaultProps) {
  const { todo } = props
  const todos = useContext(AppContext)
  console.log('item', todos)
  const [editableText, setEditableText] = useState(todo.text)
  const [time, setTime] = useState(new Date(Date.now()).toDateString())

  const handleSubmit = e => {
    // props.edit(todo.id, editableText)
    todos.editTodo(todo.id, editableText)
  }

  return (
    <span className={cssm.root}>
      <input 
      className={todo.done ? cssm.done : ''}
      type="text" 
      value={editableText} 
      onChange={e => setEditableText(e.target.value)} 
      onBlur={handleSubmit}
      />
      <time>{time}</time>
    </span>
  )
}

export default TodoItem
