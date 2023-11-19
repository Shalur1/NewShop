import React, { FC } from 'react';
import s from "./Name.module.css"

interface NameProps {
    name: string;
    brand: string;
}

const Name: FC<NameProps> = ({ name, brand }) => {
    return (
        <div className={s.Name}>
            {brand} {name}
        </div>
    );
};

export default Name;
