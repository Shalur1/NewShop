import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import s from "./Attribute.module.css"
import useActions, {useAppSelector} from "../../../hooks/redux";

interface AttributeeProps {
    productName: string
    displayValue: string
    value: string
    id: string
    type: string
    AttributeName: string,
    isAttributeChosen: boolean
    setIsAttributeChosen: Dispatch<SetStateAction<boolean>>
}
const Attributee: FC<AttributeeProps> = ({isAttributeChosen, setIsAttributeChosen,AttributeName, productName, displayValue, value, type, id }) => {
    const chosenAtt = useAppSelector((state) => state.ChosenAttributesReducer.chosenAttributes);
    const { setChosenAttribues, removeChosenAttribute } = useActions();
    const [isChosenAttribute, setIsChosenAttribute] = useState(false);

    useEffect(() => {
        checkChosenAttribute();
    }, [productName, chosenAtt]);

    const checkChosenAttribute = () => {
        const chosenAttribute = chosenAtt.find((attr) => (
            attr &&
            attr.ProductName === productName &&
            attr.AttributeName === AttributeName &&
            attr.value === value
        ));
        setIsChosenAttribute(!!chosenAttribute);
        if (chosenAttribute){
            setIsAttributeChosen(true)
        }
    };

    const changeChosenArray = () => {
        const obj = {
            ProductName: productName,
            AttributeName: AttributeName,
            value: value
        };
        console.log(chosenAtt, isAttributeChosen)
        if (isAttributeChosen && isChosenAttribute) {
            removeChosenAttribute({ ProductName: productName, AttributeName: AttributeName });
            setIsAttributeChosen(false);
        }
        else {
            if (isAttributeChosen){
                return
            }
            else {
                setChosenAttribues(obj);
                setIsAttributeChosen(true);
            }
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
