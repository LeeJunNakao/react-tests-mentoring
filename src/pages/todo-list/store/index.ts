import { configureStore } from '@reduxjs/toolkit';
import todo from './todos';

const store = configureStore({
  reducer: {
    todo,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
