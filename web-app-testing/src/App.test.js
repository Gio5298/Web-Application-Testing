import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './components/Dashboard'
import Display from './components/Display'

test('renders dashboard component', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()
})

test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});