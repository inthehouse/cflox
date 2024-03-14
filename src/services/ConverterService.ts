import { Conversion } from './conversions/Conversion';
import { DecimalToRoman } from './conversions/DecimalToRoman';
import { BinaryToRoman } from './conversions/BinaryToRoman';

export class ConverterService {
  conversions: Conversion[];

  constructor() {
    this.conversions = [
      new DecimalToRoman(),
      new BinaryToRoman(),
      // more conversions herre
    ];
  }

  convert(input: string, conversionType: string): string {
    const selectedConversion = this.conversions.find(conversion => conversion.name.replace(/\s+/g, '') === conversionType);
    if (!selectedConversion) {
      throw new Error(`Conversion type '${conversionType}' not found.`);
    }
    return selectedConversion.convert(input);
  }
}