import React, {useState, useContext} from 'react'
import cssm from './todoform.module.scss'
import {AppContext} from '../Todo/Todo'

function TodoForm () {
  const [todo, setTodo] = useState('')

  const todos = useContext(AppContext)
  console.log('form', todos, todos.addTodo)

  const handleSubmit = e => {
    e.preventDefault()
    let trunc = todo.replace(/ /g, '')
    console.log(trunc)
    // props.setter(trunc)
    todos.addTodo(trunc)
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
