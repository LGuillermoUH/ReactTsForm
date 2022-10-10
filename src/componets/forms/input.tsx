//input tsx
import React from 'react';

interface Props {
    name: string;
    id: string;
    type: string;   
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: any;
    required: boolean;
    className?: string;
}
// default className
const defaultClassName = 'border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none';
export default function Input({name, id, type, placeholder, onChange, value, required, className, ...props}: Props) {
    return (
        <input
            name={name}
            id={id}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={required}
            className={`${defaultClassName} ${className}`}
            {...props}
        />
    )
}