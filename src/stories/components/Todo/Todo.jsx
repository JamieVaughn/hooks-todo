import React, { useState } from 'react'
import cssm from './todo.module.scss'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'
import useInterval from '../../../hooks/useInterval'

const uuid = () => {
  let url = URL.createObjectURL(new Blob())
  URL.revokeObjectURL(url)
  return url.split('/')[3]
}

const todoFactory = (text) => ({
  id: uuid(), 
  text, 
  done: false, 
  deleted: false
})

function Todo (props) {
  const [todos, setTodos] = useState([todoFactory('react')])

  const handleTodo = text => {
    setTodos(prev => [...prev, todoFactory(text)])
  }

  const handleDone = id => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  }
  const handleDelete = id => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, deleted: true} : todo))
  }
  const handleEdit = (id, text) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count+1)
  }, delay)

  return (
    <div className={cssm.root}>
      <h1 onClick={() => console.log(todos)}>React Todo List for {props.name}</h1>
      <TodoForm setter={handleTodo} />
      <TodoList 
        list={todos} 
        done={handleDone} 
        delete={handleDelete} 
        edit={handleEdit} />
      <footer>
        <span>total: {todos.filter(todo => !todo.deleted).length}</span>
        <button onClick={() => setTodos([])}>Clear All</button>
      </footer>
      <hr/>
      <div>{count}</div>
      <input type="number" value={delay ?? -1} onChange={e => setDelay(e.target.value)}/>
      <button onClick={() => setDelay(null)}>Pause</button>
    </div>
  )
}

export default Todo
