import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import s from "./Cart.module.css"
import CartProductTicket from "./CartProductTicket/CartProductTicket";

const Cart = () => {
    const productsInBag = useAppSelector(state => state.CartReducer.products)
    console.log(productsInBag)
    return (
        <div className={s.Cart}>
            {productsInBag.length ?
                <div>
                    <div>
                        {productsInBag.map((elem)=>{
                            return <CartProductTicket id={elem}/>
                        })}
                    </div>
                    <div className={s.TotalPrice}>
                        <p>TotalPrice:</p>
                    </div>
                </div> : <div>Cart is pustaya</div>}
        </div>
    );
};

export default Cart;