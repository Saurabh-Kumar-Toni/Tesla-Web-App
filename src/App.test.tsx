import React from 'react';
import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import App from './App'
 
test('Test case for checking that if App Component Renders SuccessFully or not', () => {
  const history = createMemoryHistory()
  const {container}= render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(container.firstChild).toBeInTheDocument();
});

