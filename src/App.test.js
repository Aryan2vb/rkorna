import { render, screen } from '@testing-library/react';
import App from './App';
// import myComponent from "./MyCompo nent";
// import MyComponent from "./MyComponent";

test('renders learn react link', () => {
  render(<App />);
  // <MyComponent/>
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
