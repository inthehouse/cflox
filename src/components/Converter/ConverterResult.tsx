import React from 'react';
import '../../styles/converter/converterresult.css';

interface Props {
  result: string;
}

const ConverterResult: React.FC<Props> = ({ result }) => {
  return (
    <div data-testid="result" className="result-container">Result: {result}</div>
  );
}

export default ConverterResult;