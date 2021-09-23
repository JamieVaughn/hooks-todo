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
            <input className="input" type="checkbox" onClick={() => props.dispatch({action: 'complete', payload: todo.id})}/> 
            <TodoItem todo={todo} edit={props.edit} />
            <button onClick={() => props.dispatch({type: 'delete', payload: todo.id})}>X</button>
          </li>
        )) : <li className='empty-state'>No Todos Left!</li>
      }
    </ul>
  )
}

export default TodoList
