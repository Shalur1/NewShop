import React from 'react';
import s from "./Button.mdule.css"

const Button = () => {
    return (
        <div>
            <button className={s.disabled}>Buy</button>
        </div>
    );
};

export default Button;