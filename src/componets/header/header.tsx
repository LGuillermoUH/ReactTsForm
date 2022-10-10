import React from 'react';

interface IProps {
    title: string;
    className?: string;
}

export const Header = ( {title, className}: IProps ) => {
    return (
        <header className={`bg-white drop-shadow-lg ${className}`}>
            <h1 className='text-4xl'>{title}</h1>
        </header>
    )
}
