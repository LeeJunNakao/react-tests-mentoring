import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it('should if there are title at HomePage', ()=> {
    render(<App />);
    const linkElement = screen.getByText(/pages/i);
    expect(linkElement).toBeInTheDocument();
  })
  it('should if there are twho buttons', () => {
    render(<App />);
    const buttonToDoList = screen.getByText(/to do list/i);
    const buttonCrypto = screen.getByText(/Crypto/i);
    expect(buttonToDoList).toBeInTheDocument();
    expect(buttonCrypto).toBeInTheDocument();
  })
});
