import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToDoPage from '../index';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

describe('should testing to do list page', () => {
  const history = createMemoryHistory();
  const renderComponent = () => {
    render(
      <Router location={history.location} navigator={history}>
        <ToDoPage />
      </Router>,
    );
  };

  it('To do list, Should display title', () => {
    renderComponent();
    const title = screen.getByText(/to do list/i);
    expect(title).toBeInTheDocument();
  });

  it('should not render remove button', () => {
    renderComponent();
    const button = screen.queryByRole('button', { name: /REMOVER/i });
    expect(button).not.toBeInTheDocument();
  });

  it('should disable add button if input is empty', async () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    expect(button).toHaveTextContent(/add/i);
    expect(button).toBeDisabled();
    expect(input).toHaveDisplayValue('');
  });

  it('should enable add button if input is filled with fireEvent', async () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'a' } });

    expect(button).toBeEnabled();
    expect(input).toHaveDisplayValue('a');
  });

  it('should enable add button if input is filled with userEvent', async () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'a');

    expect(button).toBeEnabled();
    expect(input).toHaveDisplayValue('a');
  });

  it('should add provided value to list', async () => {
    renderComponent();

    const button = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    userEvent.type(input, 'Do grocery shopping');
    fireEvent.click(button);

    const listItems = screen.getByRole('listitem');

    expect(listItems).toHaveTextContent('Do grocery shopping');
  });
});
