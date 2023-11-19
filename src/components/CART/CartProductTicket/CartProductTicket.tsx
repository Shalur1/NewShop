import React, {FC} from 'react';
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_INFO} from "../../../query/query";
import s from "./CartProductTicket.module.css";
import Image from "../../UI/Image/Image";
import Name from "../../Name/Name";
import Attributess from "../../Attributes/Attributes";
import Price from "../../Price/Price";

interface CartProductTicketProps {
    id: string | undefined
}

const CartProductTicket: FC<CartProductTicketProps> = ({id}) => {
    const {data, loading, error} = useQuery(GET_PRODUCT_INFO, {
        variables: {id: id}
    })
    console.log(data)
    return (
        <div className={s.CartProductTicket}>
            <div className={s.Image}>
                <Image images={data.product.gallery}/>
            </div>
            <div className={s.Info}>
                <div>
                    <Name name={data.product.name} brand={data.product.brand}/>
                </div>
                <div>
                    {data.product.attributes.map((attributesElem:any) => {
                        return <Attributess productName={data.product.brand + " " + data.product.name} name={attributesElem.name}
                                            type={attributesElem.type} items={attributesElem.items}/>
                    })}
                </div>
                <div>
                    <Price prices={data.product.prices}/>
                </div>
            </div>
        </div>
    );
};

export default CartProductTicket;