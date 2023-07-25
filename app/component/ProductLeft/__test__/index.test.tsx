import React from 'react';
import { render } from '@testing-library/react';
import ProductLeftCount from '../index';
import Language from '@/dictionaires/en.json'

test('ProductLeftCount component applies correct colors based on count prop', () => {
  const { getByText } = render(<ProductLeftCount count={1} params={Language} />);

  const countElement = getByText(/1 left in stock/i);
  expect(countElement).toBeInTheDocument();

  const redBackgroundElement = countElement.parentElement;
  expect(redBackgroundElement).toBeInTheDocument();
  expect(redBackgroundElement).toHaveClass('bg-red-200');

  const redTextElement = getByText(/1 left in stock/i);
  expect(redTextElement).toBeInTheDocument();
  expect(redTextElement).toHaveClass('text-red-800');

  const { getByText: getByTextGreen } = render(<ProductLeftCount count={5} params={Language} />);

  const countElementGreen = getByTextGreen(/5 left in stock/i);
  expect(countElementGreen).toBeInTheDocument();

  const greenBackgroundElement = countElementGreen.parentElement;
  expect(greenBackgroundElement).toBeInTheDocument();
  expect(greenBackgroundElement).toHaveClass('bg-green-200');

  const greenTextElement = getByTextGreen(/5 left in stock/i);
  expect(greenTextElement).toBeInTheDocument();
  expect(greenTextElement).toHaveClass('text-green-800');
});
