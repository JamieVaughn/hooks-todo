import React, { useState } from 'react'
import TodoItem from '../TodoItem/TodoItem'
import cssm from './todolist.module.scss'

function TodoList (props) {

  const activeTodos = props.list.filter(todo => !todo.deleted)

  return (
    <ul className={cssm.root}>
      {
        activeTodos.length ? activeTodos.map(todo => (
          <li key={todo.id} >
            <input className="input" type="checkbox" onClick={() => props.done(todo.id)}/>
            <TodoItem todo={todo} edit={props.edit} />
            <button onClick={() => props.delete(todo.id)}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
