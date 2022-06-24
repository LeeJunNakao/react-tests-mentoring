import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { useHooks } from '../hooks';
import { act } from 'react-dom/test-utils';
import store from 'pages/todo-list/store';

describe('Todo-list hooks', () => {
  const wrapper = ({ children }: { children: any }) => (
    <Provider store={store}>{children}</Provider>
  );

  it('Should list to do items', async () => {
    const { result } = renderHook(() => useHooks(), { wrapper });

    act(() => {
      result.current.setInputValue('hello!!!');
    });

    expect(result.current.inputValue).toBe('hello!!!');

    act(() => {
      result.current.addItem();
    });

    expect(result.current.items).toEqual(['hello!!!']);
  });
  it('Should remove selected todo items', () => {
    const { result } = renderHook(() => useHooks(), { wrapper });

    act(() => {
      result.current.setItemsDone(['hi-there']);
    });

    expect(result.current.itemsDone).toStrictEqual(['hi-there']);

    act(() => {
      result.current.removeItens();
    });

    expect(result.current.itemsDone).toStrictEqual([]);
  });
});
