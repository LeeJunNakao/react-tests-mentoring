import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {createMemoryHistory} from 'history'
import {Router} from 'react-router-dom'
import Form, { CryptoEntry } from '../Form';

describe('should testing page form', () => {

  const addCrypto = (crypto: CryptoEntry) => {
    []
  };
  const history = createMemoryHistory()
  const renderComponet = () => {
    render(
      <Router location={history.location} navigator={history}>
        <Form />
      </Router>,
    )
  };

  it("shouldn't show label quantity error", () => {
    renderComponet();
    const labelError = screen.queryByText(/Não é permitido valores negativos/i)
    expect(labelError).not.toBeInTheDocument();
  })
  it('should show label quantity error', async() => {
    renderComponet();
    const input = screen.queryByLabelText('Quantity');
    fireEvent.change(input as HTMLElement, { target: { value: '-1' } });
    const labelError = await screen.findByText(/Não é permitido valores negativos/i)
    expect(labelError).toBeInTheDocument();
  })
});