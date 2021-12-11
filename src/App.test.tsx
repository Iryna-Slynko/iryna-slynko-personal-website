import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name link', () => {
  render(<App />);
  const myName = screen.getByText(/Iryna Slynko/i);
  expect(myName).toBeInTheDocument();
});
