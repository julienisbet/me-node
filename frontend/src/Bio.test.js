import { render, screen } from '@testing-library/react';
import Bio from './Bio';

test('renders bio', () => {
  render(<Bio />);
  const bioElem = screen.getByTestId("bio");
  expect(bioElem).toBeInTheDocument();
});