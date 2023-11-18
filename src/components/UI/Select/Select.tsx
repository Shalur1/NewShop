import React, {ChangeEvent, FC} from 'react';
import s from "./Select.module.css"


interface SelectOption {
    symbol: string;
    label: string;
}

interface SelectProps {
    Currencies: SelectOption[];
    onChange: (selectedValue: string) => void;
    selectedOption: string
}

const Select: FC<SelectProps> = ({Currencies, onChange, selectedOption}) => {
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className={s.Select}>
            <select value={selectedOption} onChange={handleSelectChange}>
                {Currencies.map((option) => (
                    <option value={option.symbol}>
                        {option.label + " " + option.symbol}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;

