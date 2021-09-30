import React, {useState} from 'react'
import cssm from './todoform.module.scss'

import { useDispatch } from 'react-redux'
import { addTodo } from '../Todo/todoSlice'

function TodoForm (props) {
  const [todo, setTodo] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    let trunc = todo.replace(/ /g, '')
    console.log(trunc)
    dispatch(addTodo(trunc))
    setTodo('')
  }

  return (
    <form className={cssm.root} onSubmit={handleSubmit}>
      <input 
      required
      value={todo} 
      onChange={e => setTodo(e.target.value)} 
      name='new-todo'
      type="text" 
      placeholder='Type a Todo!'
      />
    </form>
  )
}

export default TodoForm
