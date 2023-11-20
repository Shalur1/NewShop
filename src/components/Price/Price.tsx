import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {Price} from "../../types/types"
import s from "./Price.module.css"

interface PriceProps{
    prices: [Price]
    factor?: number
}

const Pricee:FC<PriceProps> = ({prices, factor}) => {
    const defaultFactor = factor ?? 1;
    const selectedOption = useAppSelector(state => state.SelectedOptionReducer.SelectedOption)
    const filteredPrice = prices.find(
        (price) => price.currency.symbol === selectedOption
    );

    return (
        <div className={s.Price}>
            {filteredPrice && (
                <p>
                   {Math.round(defaultFactor * filteredPrice.amount * 100) / 100} {filteredPrice.currency.symbol}
                </p>
            )}
        </div>
    );
};

export default Pricee;