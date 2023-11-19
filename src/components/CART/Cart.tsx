import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_INFO} from "../../query/query";
import CartProductTicket from "./CartProductTicket/CartProductTicket";

const Cart = () => {
    const productsInBag = useAppSelector(state => state.CartReducer.products)
    return (
        <div>
            <div>
                {productsInBag.map((elem)=>{
                    return <CartProductTicket id={elem}/>
                })}
            </div>
        </div>
    );
};

export default Cart;