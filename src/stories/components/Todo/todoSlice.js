import { createSlice } from '@reduxjs/toolkit'

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

// Write the "slice" of our redux state for the Todo feature
export const slice = createSlice({
  name: 'todo',
  initialState: [
    todoFactory('redux toolkit')
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(todoFactory(action.payload.text))
    },
    applyComplete: (state, action) => {
      let todo = state.find(todo => todo.id === action.payload.id)
      todo.done = !todo.done
    },
    applyDelete: (state, action) => {
      let todo = state.find(todo => todo.id === action.payload.id)
      todo.deleted = true
    },
    applyEdit: (state, action) => {
      let todo = state.find(todo => todo.id === action.payload.id)
      todo.text = action.payload.text
    },
    resetTodos: state => state = []
  }
})

// console.log('createSlice', slice)

// Define State Selectors
export const selectTodos = state => state.todo
export const selectTodoById = (state, id) => state.find(todo => todo.id === id)
export const selectDeletedTodos = state => state.filter(todo => todo.deleted === true)
export const transformedTodos = state => state.map(todo => todo.text + ' ' + todo.id)

export const {
  addTodo,
  applyEdit,
  applyDelete,
  applyComplete,
  resetTodos
} = slice.actions

export default slice.reducer
