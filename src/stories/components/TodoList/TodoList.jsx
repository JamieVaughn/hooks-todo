import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cssm from './todolist.module.scss'

// redux toolkit
import { useSelector, useDispatch } from 'react-redux'
import {
  applyComplete,
  applyDelete,
  selectTodos
} from '../Todo/todoSlice'

function TodoList (props) {

  const state = useSelector(selectTodos)
  const dispatch = useDispatch()

  // const activeTodos = props.list.filter(todo => !todo.deleted)
  const activeTodos = state.todo.filter(todo => !todo.deleted)

  return (
    <ul className={cssm.root}>
      {
        activeTodos.length ? activeTodos.map(todo => (
          <li key={todo.id} >
            <input className="input" type="checkbox" onClick={() => dispatch(applyComplete({id: todo.id}))}/>
            <TodoItem todo={todo} />
            <button onClick={() => dispatch(applyDelete({id: todo.id}))}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
