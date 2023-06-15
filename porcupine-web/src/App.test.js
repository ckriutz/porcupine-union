import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Libertarian Party of Union County text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Libertarian Party of Union County/i);
  expect(linkElement).toBeInTheDocument();
});
