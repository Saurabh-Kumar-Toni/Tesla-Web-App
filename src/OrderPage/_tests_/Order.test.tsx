import { render, screen } from '@testing-library/react';
import OrderSuccessful from '../OrderSuccessful';

test('check if the Order page is rendered properly or not', () => {
 
    const {container} = render(<OrderSuccessful />)
    expect(container.firstChild).toMatchSnapshot();
  });