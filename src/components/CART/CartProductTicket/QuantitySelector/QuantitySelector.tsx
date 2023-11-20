import React, { FC, useState } from 'react';
import useActions from "../../../../hooks/redux";
import Button from "../../../UI/Button/Button";
import s from "./QuantitySelector.module.css"

interface QuantitySelectorProps {
    initialValue: number;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ initialValue }) => {
    const [quantity, setQuantity] = useState(initialValue);
    const {addToTotalPrice} = useActions()
    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
        }
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    };

    return (
        <div className="quantity-selector">
            <Button onClick={decreaseQuantity}>
                -
            </Button>
            <span className={s.Quantitu}>{quantity}</span>
            <Button onClick={increaseQuantity}>
                +
            </Button>
        </div>
    );
};

export default QuantitySelector;
