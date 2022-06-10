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
    const bufferArray: string[] = [];
    items.forEach(function (element) {
      if(itemsDone.indexOf(element) == -1)
        bufferArray.push(element);
    });
    setItems(bufferArray);
    setItemsDone(bufferArray);    
  }
  return {items, setItems, itemsDone, setItemsDone, inputValue, setInputValue, handleChange, addItem, removeItens}
};