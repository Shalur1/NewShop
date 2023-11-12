import React, {FC} from 'react';

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
    return (
        <div>
            <p>{prices[0].amount + " " + prices[0].currency.symbol}</p>
        </div>
    );
};

export default Price;