import React, {FC} from 'react';
import {Attributes} from "../../types/types";
import Attribute from "./Attribute/Attribute";
import s from "./Attributes.module.css"

const Attributess: FC<Attributes> = ({id, name, type, items}) => {
    return (
        <div className={s.Attributess}>
            <p>{name}</p>
            <div className={s.AttributeContainer}>
                {items.map((elem) => {
                    return <Attribute type={type} displayValue={elem.displayValue} value={elem.value} id={elem.id}/>
                })}
            </div>
        </div>
    );
};

export default Attributess;