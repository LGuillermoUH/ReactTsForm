// button ts
import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
    type: "button" | "submit" | "reset" | undefined;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({children, className, onClick, type, ...props}: Props) {
    return (
        <button
            onClick={onClick}
            type={type}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}