import React from 'react';
import { render, screen } from '@testing-library/react';
import ToDoPage from '../index';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'

describe('should testing to do list page', () => {
  const history = createMemoryHistory()
  const renderComponet = () => {
    render(
      <Router location={history.location} navigator={history}>
        <ToDoPage />
      </Router>,
    )
  };
  it('To do list, Should display title', () => {
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
