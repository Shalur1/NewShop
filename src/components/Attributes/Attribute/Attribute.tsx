import React, {FC, useEffect, useState} from 'react';
import s from "./Attribute.module.css"
import useActions, {useAppSelector} from "../../../hooks/redux";

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
    const { setChosenAttribues, removeChosenAttribute } = useActions();
    const [isChosenAttribute, setIsChosenAttribute] = useState(false);
    const [canSetChosen, setCanSetChosen] = useState(true);
    const checkChosenAttribute = () => {
        const chosenAttribute = chosenAtt.find((attr) => (
            attr &&
            attr.ProductName === productName &&
            attr.AttributeName === AttributeName &&
            attr.value === value
        ));
        setIsChosenAttribute(!!chosenAttribute);
        setCanSetChosen(!!chosenAttribute);
    };

    useEffect(() => {
        checkChosenAttribute();
    }, [chosenAtt]);

    useEffect(() => {
        checkChosenAttribute();
    });

    const changeChosenArray = () => {
        const obj = {
            ProductName: productName,
            AttributeName: AttributeName,
            value: value
        };

        if (canSetChosen) {
            if (isChosenAttribute) {
                removeChosenAttribute({ ProductName: productName, AttributeName: AttributeName });
            } else {
                setChosenAttribues(obj);
            }
        } else {
            setChosenAttribues(obj);
        }
    };

    const className = type === "swatch" ? s.Color : s.Text;
    return (
        <div
            onClick={changeChosenArray}
            style={type === "swatch" ? { background: value } : {}}
            className={className + (isChosenAttribute ? ` ${s.ChosenAttribute}` : '')}
        >
            {type === "swatch" ? <div></div> : <p>{value}</p>}
        </div>
    );
};

export default Attributee;
