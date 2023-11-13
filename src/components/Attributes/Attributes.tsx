import React, {FC} from 'react';
import Attributee from "./Attribute/Attribute";
import s from "./Attributes.module.css"
import {Attribute} from "../../types/types";

interface AttributesProps {
    productName: string,
    name: string,
    type: string,
    items: Attribute[]
}

const Attributess: FC<AttributesProps> = ({productName, name, type, items}) => {
    return (
        <div className={s.Attributess}>
            <p>{name}</p>
            <div className={s.AttributeContainer}>
                {items.map((elem) => {
                    return <Attributee AttributeName={name} productName={productName} type={type}
                                       displayValue={elem.displayValue} value={elem.value} id={elem.id}/>
                })}
            </div>
        </div>
    );
};

export default Attributess;