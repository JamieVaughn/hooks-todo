import { configureStore } from "@reduxjs/toolkit";
import reducer from '../stories/components/Todo/todoSlice'
import usersReducer from "../stories/components/Todo/usersSlice";

export const store = configureStore({
  reducer: {
    todo: reducer,
  }
})
