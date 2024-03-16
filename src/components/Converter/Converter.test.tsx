import { render, screen, fireEvent } from '@testing-library/react';
import Converter from './Converter';

test('converts decimal to Roman numerals', () => {
    render(<Converter />);

    const inputElement = screen.getByLabelText('Number:');
    fireEvent.change(inputElement, { target: { value: '23' } });

    const selectElement = screen.getByLabelText('Conversion Type:');
    fireEvent.change(selectElement, { target: { value: 'Decimal to Roman' } });

    const convertButton = screen.getByText('Convert');
    fireEvent.click(convertButton);

    const resultElement = screen.getByTestId('result');
    expect(resultElement).toHaveTextContent('XXIII');
});
