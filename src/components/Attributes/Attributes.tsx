import React, {FC, useState} from 'react';
import Attributee from "./Attribute/Attribute";
import s from "./Attributes.module.css"
import {Attribute} from "../../types/types";
import Price from "../Price/Price";

interface AttributesProps {
    productName: string,
    name: string,
    type: string,
    items: Attribute[]
}

const Attributess: FC<AttributesProps> = ({productName, name, type, items}) => {

    const [isAttributeChosen, setIsAttributeChosen] = useState<boolean>(false)

    return (
        <div className={s.Attributess}>
            <p>{name}</p>
            <div className={s.AttributeContainer}>
                {items.map((elem) => {
                    return <Attributee isAttributeChosen={isAttributeChosen} setIsAttributeChosen={setIsAttributeChosen} AttributeName={name} productName={productName} type={type}
                                       displayValue={elem.displayValue} value={elem.value} id={elem.id}/>
                })}
            </div>
        </div>
    );
};

export default Attributess;