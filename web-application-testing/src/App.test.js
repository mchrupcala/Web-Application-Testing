import React from 'react';
import ReactDOM from 'react-dom';
import { getByText, getByTestId } from '@testing-library/dom';
import { render } from '@testing-library/react';
import App from './App';
// import { testNameToKey } from 'jest-snapshot/build/utils';

it('renders without crashing', () => {
  render(<App />);
  // const wrapper = rtl.render(
  //   <span>hello world!</span>
  // )
});

test('strikes display on the screen and start at 0', () => {
  let { getByText} = render(<App />);
  
  getByText(/strikes/i);
});

test('balls display on the screen and start at 0', () => {
  let { getByText} = render(<App />);
  
  getByText(/balls/i);
});

test('all four buttons are displaying on-screen', () => {
  let { getByText, getByTestId} = render(<App />);
  
  getByTestId(/ball-button/i);
  getByTestId(/strike-button/i);
  getByText(/foul/i);
  getByText(/hit/i);
});