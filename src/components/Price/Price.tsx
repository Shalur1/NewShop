import React, {FC} from 'react';
import {useAppSelector} from "../../hooks/redux";

interface Currency{
    label: string,
    symbol:string
}

interface price{
    currency: Currency,
    amount: number
}

interface PriceProps{
    prices: [price]
}

const Price:FC<PriceProps> = ({prices}) => {
    const selectedOption = useAppSelector(state => state.SelectedOptionReducer.SelectedOption)
    const filteredPrice = prices.find(
        (price) => price.currency.symbol === selectedOption
    );
    console.log(filteredPrice)

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

export default Price;