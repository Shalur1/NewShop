import React, {FC} from 'react';
import s from "./ProductTicket.module.css"
import Button from "../../UI/Button/Button";
import Image from "../../UI/Image/Image";
import {useNavigate} from "react-router-dom";
import Price from "../../Price/Price";
import Name from "../../Name/Name";


interface ProductTicketProps {
    elem: any
}

const ProductTicket: FC<ProductTicketProps> = ({elem}) => {
    const nav = useNavigate()

    const Redirect = () => {
        nav(`/product/${elem.id}`)
    }

    return (
        <div className={s.ProductTicket}>
            <div className={s.Image}>
                <Image images={elem.gallery}/>
            </div>
            <div>
                <Name name={elem.name} brand={elem.brand}/>
            </div>
            <div>
                <Price prices={elem.prices}/>
            </div>
            {elem.inStock ? <p>In Stock</p> : <p>Out Stock</p>}
            <div onClick={Redirect}>
                <Button/>
            </div>
        </div>
    )
        ;
};

export default ProductTicket;