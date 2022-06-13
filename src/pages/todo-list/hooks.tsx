import React, { useState } from 'react';

export const useHooks = () => {
  const [items, setItems] = useState<string[]>([]);
  const [itemsDone, setItemsDone] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };
  
  const removeItens = () => {
    const arr = items.filter((item) => !itemsDone.includes(item));
    setItems(arr);
    setItemsDone([]);
  }
  return {items, setItems, itemsDone, setItemsDone, inputValue, setInputValue, handleChange, addItem, removeItens}
};