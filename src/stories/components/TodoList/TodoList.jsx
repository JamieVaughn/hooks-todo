import React, { useState, useContext } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cssm from './todolist.module.scss'

import {AppContext, useTodos} from '../Todo/Todo'

function TodoList () {
  const todos = useContext(AppContext)
  const {completeTodo, deleteTodo} = todos
  console.log('list', todos.todos, deleteTodo, completeTodo)
  // const activeTodos = props.list.filter(todo => !todo.deleted)
  const activeTodos = todos.todos.filter(todo => !todo.deleted)

  return (
    <ul className={cssm.root}>
      {
        activeTodos.length ? activeTodos.map(todo => (
          <li key={todo.id} >
            <input className="input" type="checkbox" onClick={() => completeTodo(todo.id)}/>
            <TodoItem todo={todo} />
            <button onClick={() => deleteTodo(todo.id)}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
