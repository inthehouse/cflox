import React from 'react';

interface Props {
  result: string;
}

const ConverterResult: React.FC<Props> = ({ result }) => {
  return (
    <div>Result: {result}</div>
  );
}

export default ConverterResult;