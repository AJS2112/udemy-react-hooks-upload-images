import { render, screen } from '@testing-library/react';
import Upload from './upload';

test('deve renderizar o componente sem erros', () => {
  render(<Upload />);
  const linkElement = screen.getByText(/Upload/i);
  expect(linkElement).toBeInTheDocument();
});
