import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import ToDoPage from '../index';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import { useHooks } from '../todo-list-hooks';
import { act } from 'react-dom/test-utils';

describe('test to do list hooks', () => {
  it('should test to do list hooks', async() => {
    const { result } = renderHook(() => useHooks());

    act(() => {
      result.current.setInputValue('hello!!!');
    });

    expect(result.current.inputValue).toBe('hello!!!');

    act(() => {
      result.current.addItem();
    });

    expect(result.current.items).toEqual(['hello!!!']); 
  });
  it('should test to do list remove itens', () => {
    const { result } = renderHook(() => useHooks());
    act(() => {
      result.current.setItemsDone(['hi-there']);
    });

    expect(result.current.itemsDone).toStrictEqual(['hi-there']);

    act(() => {
      result.current.removeItens();
    });
    expect(result.current.itemsDone).toStrictEqual([]);
  })
});

describe('should testing to do list page', () => {
  const history = createMemoryHistory()
  const renderComponet = () => {
    render(
      <Router location={history.location} navigator={history}>
        <ToDoPage />
      </Router>,
    )
  };
  it('should if there is title', () => {
    renderComponet();
    const title = screen.getByText(/to do list/i)
    expect(title).toBeInTheDocument();
  })
  it('should not render remove button', () => {
    renderComponet();
    const button = screen.queryByRole('button', {name: /REMOVER/i});
    expect(button).not.toBeInTheDocument();
  });
});
