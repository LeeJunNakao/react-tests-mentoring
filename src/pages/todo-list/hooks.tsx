import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItems, Getters } from './store/todos';

export const useHooks = () => {
  const dispatch = useDispatch();

  const items = useSelector(Getters.todoList);
  const [itemsDone, setItemsDone] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const add = () => {
    dispatch(addItem(inputValue));
  };

  const remove = () => {
    dispatch(removeItems(itemsDone));
    setItemsDone([]);
  };

  return {
    items,
    itemsDone,
    setItemsDone,
    inputValue,
    setInputValue,
    handleChange,
    addItem: add,
    removeItens: remove,
  };
};
