import { render, screen } from '@testing-library/react';
import Contactus from './Contactus';

test('renders learn react link', () => {
  render(<Contactus />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
