import React, { useState, useContext } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cssm from './todolist.module.scss'

import {AppContext} from '../Todo/Todo'

function TodoList () {
  const todos = useContext(AppContext)
  console.log('list', todos.todos, deleteTodo, completeTodo)
  // const activeTodos = props.list.filter(todo => !todo.deleted)
  const activeTodos = todos.todos.filter(todo => !todo.deleted)

  return (
    <ul className={cssm.root}>
      {
        activeTodos.length ? activeTodos.map(todo => (
          <li key={todo.id} >
            <input className="input" type="checkbox" onClick={() => todos.completeTodo(todo.id)}/>
            <TodoItem todo={todo} />
            <button onClick={() => todos.deleteTodo(todo.id)}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
