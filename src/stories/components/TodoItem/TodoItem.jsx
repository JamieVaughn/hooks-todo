import React, { useState } from 'react'
import cssm from './todoitem.module.scss'

// redux toolkit
import { useDispatch } from 'react-redux'
import { applyEdit } from '../Todo/todoSlice'

const defaultProps = {id: 1, text: 'fallback', done: false, deleted: false}

function TodoItem (props = defaultProps) {
  const { todo } = props
  const [editableText, setEditableText] = useState(todo.text)
  const [time, setTime] = useState(new Date(Date.now()).toDateString())

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(applyEdit({id: todo.id, text: editableText}))
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
