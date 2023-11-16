import React, { ChangeEvent, FC } from 'react';


interface SelectOption {
    symbol: string;
    label: string;
}

interface SelectProps {
    Currencies: SelectOption[];
    onChange: (selectedValue: string) => void;
}

const Select: FC<SelectProps> = ({ Currencies, onChange }) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <select onChange={handleSelectChange}>
            {Currencies.map((option) => (
                <option value={option.symbol}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;

