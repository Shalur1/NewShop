import React, { FC, ReactNode } from 'react';

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
