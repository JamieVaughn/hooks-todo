import React, { useState } from 'react'
import cssm from './todoitem.module.scss'


const defaultProps = {id: 1, text: 'fallback', done: false, deleted: false}

// import RTK stuff
import { useDispatch } from 'react-redux'
import { applyEdit } from '../Todo/todoSlice.js'

function TodoItem (props = defaultProps) {
  const { todo } = props
  const [editableText, setEditableText] = useState(todo.text)
  const [time, setTime] = useState(new Date(Date.now()).toDateString())

  const dispatch = useDispatch()

  return (
    <span className={cssm.root}>
      <input 
      title={todo.text || todo.title}
      className={todo.done ? cssm.done : ''}
      type="text" 
      value={editableText} 
      onChange={e => setEditableText(e.target.value)} 
      onBlur={() => dispatch(applyEdit({id: todo.id, text: editableText}))}
      />
      <time>{time}</time>
    </span>
  )
}

export default TodoItem
