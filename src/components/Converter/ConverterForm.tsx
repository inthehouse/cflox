import React, { useState } from 'react';
import '../../styles/converter/converterform.css';

interface Props {
    onSubmit: (number: string, conversionType: string) => void;
}

const ConverterForm: React.FC<Props> = ({ onSubmit }) => {
    const [number, setNumber] = useState<string>('');
    const [conversionType, setConversionType] = useState<string>('DecimaltoRoman');

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(e.target.value);
    };

    const handleConversionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setConversionType(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(number, conversionType.replace(/\s+/g, ''));
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
                Number:
                <input
                    type="text"
                    value={number}
                    onChange={handleNumberChange}
                />
            </label>
            <label>
                Conversion Type:
                <select value={conversionType} onChange={handleConversionTypeChange}>
                    <option value="DecimaltoRoman">Decimal to Roman</option>
                    <option value="BinarytoRoman">Binary to Roman</option>
                    {/* more options come here*/}
                </select>
            </label>
            <button type="submit">Convert</button>
        </form>
    );
}

export default ConverterForm;