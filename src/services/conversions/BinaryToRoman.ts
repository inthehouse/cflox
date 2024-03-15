import { Conversion } from './Conversion';
import { DecimalToRoman } from './DecimalToRoman';

export class BinaryToRoman implements Conversion {
  name = 'Binary to Roman';

  convert(input: string): string {
    const decimalConverter = new DecimalToRoman();
    const decimal = parseInt(input, 2);
    if (isNaN(decimal)) {
      throw new Error('Invalid input. Please enter a valid binary number.');
    }
    return decimalConverter.convert(decimal.toString());
  }
}