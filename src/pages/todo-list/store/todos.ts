import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export type State = {
  todoList: string[];
};

export const counterSlice = createSlice({
  name: 'todo',
  initialState: {
    todoList: [],
  } as State,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.todoList.push(action.payload);
    },
    removeItems: (state, action: PayloadAction<string[]>) => {
      state.todoList = state.todoList.filter(
        (i) => !action.payload.includes(i),
      );
    },
  },
});

export const { addItem, removeItems } = counterSlice.actions;

export const Getters = {
  todoList: (store: RootState) => store.todo.todoList,
};

export default counterSlice.reducer;
