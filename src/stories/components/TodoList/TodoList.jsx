import React, { useState, useContext } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cssm from './todolist.module.scss'

import {AppContext, useTodos} from '../Todo/Todo'

function TodoList (props) {
  const list = useContext(AppContext)
  console.log('list', useTodos())
  // const activeTodos = props.list.filter(todo => !todo.deleted)
  const activeTodos = useTodos().todos.filter(todo => !todo.deleted)

  return (
    <ul className={cssm.root}>
      {
        activeTodos.length ? activeTodos.map(todo => (
          <li key={todo.id} >
            <input className="input" type="checkbox" onClick={() => useTodos().completeTodo(id)}/>
            <TodoItem todo={todo} edit={props.edit} />
            <button onClick={() => props.delete(todo.id)}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
