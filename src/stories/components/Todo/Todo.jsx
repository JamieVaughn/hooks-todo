import React, { useState } from 'react'
import cssm from './todo.module.scss'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'
import useInterval from '../../../hooks/useInterval'

// redux toolkit imports
import { useSelector, useDispatch } from 'react-redux'
import { resetTodos, selectTodos } from './todoSlice'

function Todo (props) {
  // const [todos, setTodos] = useState([todoFactory('react')])

  // const handleTodo = text => {
  //   setTodos(prev => [...prev, todoFactory(text)])
  // }

  // const handleDone = id => {
  //   setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  // }
  // const handleDelete = id => {
  //   setTodos(prev => prev.map(todo => todo.id === id ? {...todo, deleted: true} : todo))
  // }
  // const handleEdit = (id, text) => {
  //   setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text} : todo))
  // }
  const state = useSelector(selectTodos)
  const dispatch = useDispatch()
  console.log('todo', selectTodos, state, state.todo)

  // count interval stuff (not in redux):
  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count+1)
  }, delay)

  return (
    <div className={cssm.root}>
      <h1 onClick={() => console.log(state)}>React Todo List for {props.name}</h1>
      <TodoForm />
      <TodoList />
      <footer>
        <span>total: {state.todo.filter(todo => !todo.deleted).length}</span>
        <button onClick={() => dispatch(resetTodos())}>Clear All</button>
      </footer>
      <hr/>
      <div>{count}</div>
      <input type="number" value={delay ?? -1} onChange={e => setDelay(e.target.value)}/>
      <button onClick={() => setDelay(null)}>Pause</button>
    </div>
  )
}

export default Todo
