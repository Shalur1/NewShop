import React, { FC, ReactNode } from 'react';
import s from "./Button.module.css"

interface ButtonProps {
    children?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <button className={s.Button} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;

