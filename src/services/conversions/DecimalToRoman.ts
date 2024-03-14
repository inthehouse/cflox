import { Conversion } from './Conversion';

export class DecimalToRoman implements Conversion {
  name = 'Decimal to Roman';

  convert(input: string): string {
    const decimal = parseInt(input);
    if (isNaN(decimal) || decimal < 1 || decimal > 3999) {
      throw new Error('Invalid input. Please enter a number between 1 and 3999.');
    }

    const romanNumerals: { [key: number]: string } = {
      1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X',
      40: 'XL', 50: 'L', 90: 'XC', 100: 'C',
      400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'
    };

    let result = '';
    let num = decimal;

    for (const value of Object.keys(romanNumerals).reverse()) {
      const intValue = parseInt(value);
      const numeral = romanNumerals[intValue];
      while (num >= intValue) {
        result += numeral;
        num -= intValue;
      }
    }

    return result;
  }
}