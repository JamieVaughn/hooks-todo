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
function useTodos([todos, setTodos]) {
  return {
    todos,
    addTodo: todo => setTodos(prev => ([...prev, todoFactory(todo)])),
    completeTodo: id => setTodos(prev => prev.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo)),
    resetTodos: () => setTodos([]),
    deleteTodo: id => setTodos(prev => prev.map(todo => todo.id === id ? {...todo, deleted: true} : todo)),
    editTodo: (id, text) => setTodos(prev => prev.map(todo => todo.id === id ? {...todo, text} : todo))
  }
}
// console.log('context', AppContext)

function Todo (props) {
  // const [todos, setTodos] = useState([todoFactory('react')])
  const todos = useTodos(useState(useContext(AppContext)))

  console.log('todos', todos, todos.todos, todos.resetTodos)
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
    <AppContext.Provider value={todos} >
      <div className={cssm.root}>
        <h1 onClick={() => console.log(AppContext)}>React Todo List for {props.name}</h1>
        <TodoForm />
        <TodoList />
        <footer>
          <span>total: {todos.todos.filter(todo => !todo.deleted).length}</span>
          <button onClick={() => todos.resetTodos()}>Clear All</button>
        </footer>
      </div>
    </AppContext.Provider>
  )
}

export default Todo
