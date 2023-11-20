import React, {FC, useRef, useState} from 'react';
import Button from "../../../UI/Button/Button";
import s from "./QuantitySelector.module.css"

interface QuantitySelectorProps {
    initialValue: number;
    onQuantityChange: (newQuantity: number) => void;
}

const QuantitySelector: FC<QuantitySelectorProps> = ({ initialValue, onQuantityChange}) => {
    const [quantity, setQuantity] = useState(initialValue);
    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            onQuantityChange(newQuantity)
        }
    };

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        onQuantityChange(newQuantity)
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
