import React, { useState, useEffect } from 'react'
import cssm from './todo.module.scss'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'
import useInterval from '../../../hooks/useInterval'

// Importing RTK stuff
import { resetTodos, selectTodos } from './todoSlice.js'
import { apiTodos } from './todoSlice.js'
// import { getUsers } from './usersSlice.js'
import { useSelector, useDispatch } from 'react-redux'

function Todo (props) {
  const state = useSelector(selectTodos)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(apiTodos())
  // }, [])
  // console.log('state', state)

  const [count, setCount] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    setCount(count+1)
  }, delay)

  // const { users } = useSelector((state) => state.users);
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);


  return (
    <div className={cssm.root}>
      <h1 onClick={() => console.log(state.todos)}>React Todo List for {props.name}</h1>
      <TodoForm />
      <TodoList />
      <footer>
        <span>total: {state.todos.filter(todo => !todo.deleted).length}</span>
        <button onClick={() => dispatch(resetTodos())}>Clear All</button>
      </footer>
      <hr/>
      <button onClick={() => dispatch(apiTodos())}>Fetch Todos from API.</button>
      <span hidden={state.status !== 'loading'}>
        <svg id='starburst-spinner' width='50px' height='50px' viewBox='0 0 50 50'>
          <circle fill="none" stroke="dodgerblue" strokeWidth="10"  strokeDasharray="3,7.5" cx="25" cy="25" r="15"/>
          <animateTransform attributeName='transform' dur='3s' type='rotate' from='0 0 0 ' to='360 0 0' repeatCount='indefinite'/> 
        </svg>
      </span>
      <div hidden={state.status !== 'failed'}>Sorry the API is down</div>
      {/* {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)} */}
      {/* <div>{count}</div>
      <input type="number" value={delay ?? -1} onChange={e => setDelay(e.target.value)}/>
      <button onClick={() => setDelay(null)}>Pause</button> */}
    </div>
  )
}

export default Todo
