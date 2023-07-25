import React from 'react';
import { render } from '@testing-library/react';
import Rating from '../index';

test('Rating component renders correct number of stars based on rating', () => {
  const rating = {
    rate: '4.5',
    text: 'Google Review',
  };

  const { getAllByTestId, getByText } = render(<Rating rating={rating} />);

  const filledStars = getAllByTestId('filled-star');
  expect(filledStars.length).toBe(4);

  const emptyStars = getAllByTestId('empty-star');
  expect(emptyStars.length).toBe(1);

  const ratingTextElement = getByText(/4.5 Google Review/i);
  expect(ratingTextElement).toBeInTheDocument();
});
