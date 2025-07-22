// import * as React from 'react';
// import MainPage from "./MainPage";
// import { render } from "@testing-library/react";

// describe('Main Page', () => {
//     it('Renders MainPage component', () => {
//         render(<MainPage />);
//     })
// })

import { render, screen } from '@testing-library/react';

function App() {
  return <h1>Hello, World!</h1>;
}

test('renders greeting', () => {
  render(<App />);
  expect(screen.getByText(/hello, world/i)).toBeInTheDocument();
});