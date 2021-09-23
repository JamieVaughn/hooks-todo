import React, { useState, useContext, createContext } from 'react'
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

export const AppContext = createContext([
  todoFactory('redux'),
  todoFactory('firebase'),
])
export function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodos: todo => setTodos(prev => ([...prev, todo])),
    completeTodo: id => setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  }
}
// console.log('context', AppContext)

function Todo (props) {
  // const [todos, setTodos] = useState([todoFactory('react')])
  const todos = useTodos(useState(useContext(AppContext)))

  console.log('todos', todos)
  const handleTodo = text => {
    setTodos(prev => [...prev, todoFactory(text)])
  }

  const handleDone = id => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
  }
  const handleDelete = id => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, deleted: true} : todo))
  }
  const handleEdit = (id, text) => {
    setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text} : todo))
  }

  return (
    <AppContext.Provider>
      <div className={cssm.root}>
        <h1 onClick={() => console.log(AppContext)}>React Todo List for {props.name}</h1>
        <TodoForm setter={handleTodo} />
        <TodoList 
          // list={todos} 
          done={handleDone} 
          delete={handleDelete} 
          edit={handleEdit} />
        <footer>
          <span>total: {todos.todos.filter(todo => !todo.deleted).length}</span>
          <button onClick={() => setTodos([])}>Clear All</button>
        </footer>
      </div>
    </AppContext.Provider>
  )
}

export default Todo
