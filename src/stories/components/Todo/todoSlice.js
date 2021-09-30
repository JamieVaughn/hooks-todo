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

// Write the "slice" of our redux state for our Todo feature
export const slice = createSlice({
  name: 'todos',
  initialState:  [
    todoFactory('Redux Toolkit')
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(todoFactory(action.payload))
    },
    resetTodos: state => state = [],
    applyComplete: (state, action) => {
      let todo = state.find(todo => todo.id === action.payload.id)
      todo.done = !todo.done
    },
    applyDelete: (state, action) => {
      state.find(todo => todo.id === action.payload.id).deleted = true
    },
    applyEdit: (state, action) => {
      state.find(todo => todo.id === action.payload.id).text = action.payload.text
    },
  }
})

// export auto-generated actions
export const {
  addTodo,
  resetTodos,
  applyComplete,
  applyDelete,
  applyEdit
} = slice.actions

// write & export selectors
export const selectTodos = state => state
export const selectTodoById = (state, id) => state.find(todo => todo.id === id)

// export reducer
export default slice.reducer
