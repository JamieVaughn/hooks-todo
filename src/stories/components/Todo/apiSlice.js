import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const apiTodos = createAsyncThunk(
  'apitodos/apiTodos',
  async (dispatch, getState) => {
    // return await fetch('https://jsonplaceholder.typicode.com/todos')
    return await fetch('https://hooks-api.wxv6.vercel.app/todos')
      .then(res => res.json())
      .then(data => {
        return data
      })
  }
)

const apiSlice = createSlice({
  name: 'apitodos',
  initialState: {
    todos: [],
    status: null
  },
  extraReducers: {
    [apiTodos.pending]: (state, action) => {
      state.status = 'loading'
    },
    [apiTodos.fulfilled]: (state, action) => {
      state.status = 'success'
      console.log('success', action.payload)
      state.apitodos.push(...action.payload)
    },
    [apiTodos.rejected]: (state, action) => {
      state.status = 'failed'
    }
  }
})

export default apiSlice.reducer

// export {
//   pending
// } from apiSlice.actions
