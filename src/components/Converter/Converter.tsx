import React, { useState } from 'react';
import ConverterForm from './ConverterForm';
import ConverterResult from './ConverterResult';
import { ConverterService } from '../../services/ConverterService';

const converterService = new ConverterService();

const Converter: React.FC = () => {
  const [result, setResult] = useState<string>('');

  const handleSubmit = (number: string, conversionType: string) => {
    try {
      const convertedResult = converterService.convert(number, conversionType);
      setResult(convertedResult);
    } catch (error) {
      console.error('Error:', error);
      setResult('');
    }
  };

  return (
    <div className="Converter">
      <h1>Number Converter</h1>
      <ConverterForm onSubmit={handleSubmit} />
      {result && <ConverterResult result={result} />}
    </div>
  );
}

export default Converter;