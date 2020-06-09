import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('大鱼个锅锅', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/大鱼个锅锅/i);
    expect(linkElement).toBeInTheDocument();
});
