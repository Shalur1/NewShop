import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";
import {Price} from "../../types/types"

interface PriceProps{
    prices: [Price]
}

const Pricee:FC<PriceProps> = ({prices}) => {
    const selectedOption = useAppSelector(state => state.SelectedOptionReducer.SelectedOption)
    const filteredPrice = prices.find(
        (price) => price.currency.symbol === selectedOption
    );

    return (
        <div>
            {filteredPrice && (
                <p>
                    {filteredPrice.amount} {filteredPrice.currency.symbol}
                </p>
            )}
        </div>
    );
};

export default Pricee;