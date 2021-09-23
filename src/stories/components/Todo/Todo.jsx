import React, { useState, useReducer } from 'react'
import cssm from './todo.module.scss'
import TodoList from '../TodoList/TodoList'
import TodoForm from '../TodoForm/TodoForm'

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

const initialState = [
  todoFactory('react')
]

function Todo (props) {
  // const [todos, setTodos] = useState([todoFactory('react')])
  const [state, dispatch] = useReducer(reducer, initialState)

    function reducer (state, action) {
      console.log('reducer', state, action)
      switch(action.type) {
        case 'delete': 
          return state.map(todo => todo.id === action.payload.id ? {...todo, deleted: true} : todo)
        case 'add':
          return ([...state, todoFactory(action.payload.text)])
        case 'complete': 
        return state.map(todo => todo.id === action.payload ? {...todo, done: !todo.done} : todo)
        case 'edit':
          return state.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
        case 'reset':
          return []
        default:
          return state
      }
    }

    // how to create a lookup table reducer
    function reducerLookupTable(state, action) {
      return {
        add: handleTodo(state, action),
        delete: handleDelete(state, action),
        complete: handleDone(state, action),
        edit: handleEdit(state, action),
        reset: handleReset(),
      }[action.type] ?? state
    }

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

  return (
    <div className={cssm.root}>
      <h1 onClick={() => console.log(state)}>React Todo List for {props.name}</h1>
      <TodoForm 
      dispatch={dispatch}
      />
      <TodoList 
        list={state} 
        dispatch={dispatch}
        />
      <footer>
        <span>total: {state.filter(todo => !todo.deleted).length}</span>
        <button onClick={() => dispatch({type: 'reset'})}>Clear All</button>
      </footer>
    </div>
  )
}

export default Todo
