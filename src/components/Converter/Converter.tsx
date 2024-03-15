import React, { useState } from 'react';
import ConverterForm from './ConverterForm';
import ConverterResult from './ConverterResult';
import { ConverterService } from '../../services/ConverterService';
import '../../styles/converter/main.css';

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
    <div className="container">
      <div className="header">
        <h1>Number Converter</h1>
      </div>
      <ConverterForm onSubmit={handleSubmit} />
      <ConverterResult result={result} />
      <div className="footer">
        <p>© Momal's Number Converter</p>
      </div>
    </div>
  );
}

export default Converter;