export interface Conversion {
    name: string;
    convert(input: string): string;
  }