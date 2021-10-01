import { configureStore } from "@reduxjs/toolkit";
import reducer from '../stories/components/Todo/todoSlice'

export const store = configureStore({
  reducer: {
    todo: reducer
  }
})
