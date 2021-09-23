import React, { useState } from 'react'
import cssm from './todoitem.module.scss'


const defaultProps = {id: 1, text: 'fallback', done: false, deleted: false}

function TodoItem (props = defaultProps) {
  const { todo, edit, dispatch } = props
  const [editableText, setEditableText] = useState(todo.text)
  const [time, setTime] = useState(new Date(Date.now()).toDateString())

  const handleSubmit = e => {
    // edit(todo.id, editableText)
    dispatch({type: 'edit', id: todo.id, text: editableText})
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
