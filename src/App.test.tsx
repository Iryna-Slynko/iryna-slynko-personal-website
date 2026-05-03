import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders my name link', () => {
  render(<App />);
  const myName = screen.getAllByText(/Iryna Slynko/i);
  expect(myName[0]).toBeInTheDocument();
});
test('renders my skills link', () => {
  render(<App />);
  const mySkills = screen.getAllByText(/Skills/i);
  expect(mySkills[0]).toBeInTheDocument();
});
test('renders my projects link', () => {
  render(<App />);
  const myProjects = screen.getAllByText(/Projects/i);
  expect(myProjects[0]).toBeInTheDocument();
});
test('renders my contacts link', () => {
  render(<App />);
  const myContacts = screen.getAllByText(/Contacts/i);
  expect(myContacts[0]).toBeInTheDocument();
});
test