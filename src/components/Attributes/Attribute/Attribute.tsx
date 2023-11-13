import React, {FC, useEffect, useState} from 'react';
import s from "./Attribute.module.css"
import useActions, {useAppSelector} from "../../../hooks/redux";
import clsx from "clsx";

interface AttributeeProps {
    productName: string
    displayValue: string
    value: string
    id: string
    type: string
    AttributeName: string
}
const Attributee: FC<AttributeeProps> = ({ AttributeName, productName, displayValue, value, type, id }) => {
    const chosenAtt = useAppSelector((state) => state.ChosenAttributesReducer.chosenAttributes);
    const { setChosenAttribues } = useActions();
    const [isChosenAttribute, setIsChosenAttribute] = useState(false);

    useEffect(() => {
        const chosenAttribute = chosenAtt.find((attr) => {
            return (
                attr &&
                attr.ProductName === productName &&
                attr.AttributeName === AttributeName &&
                attr.value === value
            );
        });
        setIsChosenAttribute(!!chosenAttribute);
    }, [chosenAtt]);

    const className = type === "swatch" ? s.Color : s.Text;
    return (
        <div
            onClick={() => {
                setChosenAttribues({
                    ProductName: productName,
                    AttributeName: AttributeName,
                    value: value
                });
                setIsChosenAttribute(true);
            }}
            style={type === "swatch" ? { background: value } : {}}
            className={className + (isChosenAttribute ? ` ${s.ChosenAttribute}` : '')}
        >
            {type === "swatch" ? <div></div> : <p>{value}</p>}
        </div>
    );
};

export default Attributee;
