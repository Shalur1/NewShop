import React from 'react';
import s from "./Button.mdule.css"

const Button = () => {
    return (
        <div className={s.Button}>
            <button>Add to Cart</button>
        </div>
    );
};

export default Button;