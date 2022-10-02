import React from 'react';

interface Options {
    id: Number;
    label: string
}
interface Props {
    onChange: (p: any) => void;
    options: Options[];
    value?: string;
    className?: string
}

const SelectInput: React.FC<Props> = ({
    onChange, value, options, className
}) => {
    return (
        <select
            onChange={e => onChange(e)}
            value={value}
            className={`c-select ${className?className:""}`}
        >
            <option value="" disabled selected hidden>If you haven’t selected anything</option>
            {options.map((op: Options) => {
                return (
                    <option
                        value={op.label}>
                        {op.label}
                    </option>
                )

            })}
        </select>
    )
}
export default SelectInput;