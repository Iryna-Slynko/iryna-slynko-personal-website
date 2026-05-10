import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name link', () => {
  render(<App />);
  const myName = screen.getAllByText(/Iryna Slynko/i);
  expect(myName[0]).toBeInTheDocument();
});
