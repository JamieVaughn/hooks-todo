import React, {useState} from 'react'
import cssm from './todoform.module.scss'

function TodoForm (props) {
  const [todo, setTodo] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    let trunc = todo.replace(/ /g, '')
    // console.log(trunc)
    // props.setter(trunc)
    props.dispatch({type: 'add', payload: {text: trunc}})
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
