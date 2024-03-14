import { Conversion } from './Conversion';

export class BinaryToRoman implements Conversion {
  name = 'Binary to Roman';

  convert(input: string): string {
    const binary = parseInt(input, 2);
    if (isNaN(binary)) {
      throw new Error('Invalid input. Please enter a valid binary number.');
    }

    return (new Array(binary + 1)).join('I');
  }
}