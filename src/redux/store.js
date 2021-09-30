import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../stories/components/Todo/todoSlice';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
