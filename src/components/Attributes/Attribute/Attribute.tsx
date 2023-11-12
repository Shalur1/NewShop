import React, {FC} from 'react';
import s from "./Attribute.module.css"

interface AttributeeProps {
    displayValue: string
    value: string
    id: string
    type: string
}

const Attributee: FC<AttributeeProps> = ({displayValue, value, type, id}) => {
    console.log(type)
    let className = type === "swatch" ? s.Color : s.Text;
    return (
        <div
            style={type === "swatch" ? {background: value} : {}}
            className={className}>
            {type === "swatch" ? <div></div> : <p>{value}</p>}
        </div>
    );
};

export default Attributee;