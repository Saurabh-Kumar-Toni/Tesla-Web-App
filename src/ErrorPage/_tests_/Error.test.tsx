import { render, screen } from '@testing-library/react';
import Error from '../Error'

test('check if the Error page is rendered properly or not', () => {
 
    const {container} = render(<Error />)
    expect(container.firstChild).toMatchSnapshot();
  });