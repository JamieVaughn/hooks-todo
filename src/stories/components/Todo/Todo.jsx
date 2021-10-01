import React, { useState } from 'react'
import cssm from './todo.module.scss'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'
import useInterval from '../../../hooks/useInterval'

// Importing RTK stuff
import { resetTodos, selectTodos } from './todoSlice.js'
import { useSelector, useDispatch } from 'react-redux'


function Todo (props) {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  console.log('todo', todos)

  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count+1)
  }, delay)

  return (
    <div className={cssm.root}>
      <h1 onClick={() => console.log(todos)}>React Todo List for {props.name}</h1>
      <TodoForm />
      <TodoList />
      <footer>
        <span>total: {todos.filter(todo => !todo.deleted).length}</span>
        <button onClick={() => dispatch(resetTodos())}>Clear All</button>
      </footer>
      <hr/>
      {/* <div>{count}</div>
      <input type="number" value={delay ?? -1} onChange={e => setDelay(e.target.value)}/>
      <button onClick={() => setDelay(null)}>Pause</button> */}
    </div>
  )
}

export default Todo
