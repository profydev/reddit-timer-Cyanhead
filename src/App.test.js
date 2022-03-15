import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// function setup() {
//   render(<App />);
// }

describe('Header', () => {
  test('checks for the #home link surrounding the logo', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: '' })).toBeInTheDocument();
  });

  test.each`
    name              | navLink
    ${'about'}        | ${/about/i}
    ${'how-it-works'} | ${/how it works/i}
    ${'search'}       | ${/search/i}
  `('checks for the #$name link', (links) => {
    render(<App />);

    expect(
      screen.getByRole('link', { name: links.navLink }),
    ).toBeInTheDocument();
  });
});

// describe('Subreddit form', () => {
//   test('fetches the number of top posts from reddit API', () => {
//     setup();

//     // const inputField = screen.getByText('r /');
//     // screen.debug(inputField);
//     screen.debug();
//   });
// });
