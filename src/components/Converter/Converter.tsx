import React, { useState } from 'react';
import ConverterForm from './ConverterForm';
import ConverterResult from './ConverterResult';
import { ConverterService } from '../../services/ConverterService';
import '../../styles/converter/main.css';

const converterService = new ConverterService();

const Converter: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (number: string, conversionType: string) => {
    setError('');
    try {
      if (isNaN(Number(number))) {
        throw new Error('Invalid input. Please enter a valid number.');
      }
      const convertedResult = converterService.convert(number, conversionType);
      setResult(convertedResult);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.');
      }
      setResult('');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Number Converter</h1>
      </div>
      <ConverterForm onSubmit={handleSubmit} />
      {error && <div className="warning">{error}</div>}
      {!error && <ConverterResult result={result} />}
      <div className="footer">
        <p>© Momal's Number Converter</p>
      </div>
    </div>
  );
}

export default Converter;
