import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

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

//add async thunk
export const apiTodos = createAsyncThunk(
  'apitodos/apiTodos',
  async (dispatch, getState) => {
    return await fetch('https://hooks-api.wxv6.vercel.app/todos')
      .then(res => res.json())
      .then(data => {
        return data.map(todo => ({...todo, done: false, deleted: false}))
      })
  }
)

// Write the "slice" of our redux state for the Todo feature
export const slice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      todoFactory('redux toolkit')
    ],
    status: null
},
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(todoFactory(action.payload.text))
    },
    applyComplete: (state, action) => {
      let todo = state.todos.find(todo => todo.id === action.payload.id)
      todo.done = !todo.done
    },
    applyDelete: (state, action) => {
      let todo = state.todos.find(todo => todo.id === action.payload.id)
      todo.deleted = true
    },
    applyEdit: (state, action) => {
      let todo = state.todos.find(todo => todo.id === action.payload.id)
      todo.text = action.payload.text
    },
    resetTodos: state => state = []
  },
  // extraReducers: builder => {
  //   builder.addCase(apiTodos.pending, (state, action) => {
  //     state.status = 'loading'
  //     state.loading = true
  //   }),
  //   builder.addCase(apiTodos.fulfilled, (state, action) => {
  //     state.status = 'success'
  //     console.log('success', action.payload)
  //     state.todos.push(...action.payload)
  //   }),
  //   builder.addCase(apiTodos.rejected, (state, action) => {
  //     state.status = 'failed'
  //   })
  // },
  extraReducers: {
    [apiTodos.pending]: (state, action) => {
      state.status = 'loading'
    },
    [apiTodos.fulfilled]: (state, action) => {
      state.status = 'success'
      // console.log('success', action.payload)
      state.todos.push(...action.payload)
    },
    [apiTodos.rejected]: (state, action) => {
      state.status = 'failed'
    }
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
  resetTodos,
} = slice.actions

export default slice.reducer
