import { render, screen } from '@testing-library/react';
import AllModels from '../AllModels';

test('check if the All Cars Page is rendered properly or not', () => {
 
    const {container} = render(<AllModels />)
    expect(container.firstChild).toMatchSnapshot();
  });