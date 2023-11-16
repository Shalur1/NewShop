import React, {FC} from 'react';
import Name from "../../Name/Name";
import s from "./ProductInfo.module.css"
import {Product} from "../../../types/types";
import Attributess from "../../Attributes/Attributes";
import Button from "../../UI/Button/Button";


const  ProductInfo: FC<Product> =
    ({name, id, brand, prices,inStock, category, attributes, description}) => {
    return (
        <div className={s.ProductInfo}>
            <Name name={name} brand={brand}/>
            {attributes?.map((attributesElem) =>{
                return <Attributess productName={brand+" "+name} name={attributesElem.name} type={attributesElem.type} items={attributesElem.items}/>
            })}
            {inStock ? <div><p>In stock</p></div> : <div style={{color: "red"}}><p>Out stock</p></div>}

            <Button/>
        </div>
    );
};

export default ProductInfo;