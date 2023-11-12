import React, {FC} from 'react';
import Name from "../../Name/Name";
import s from "./ProductInfo.module.css"
import {Product} from "../../../types/types";
import Attributess from "../../Attributes/Attributes";


const ProductInfo: FC<Product> =
    ({name, id, brand, prices,inStock, category, attributes, description}) => {
    return (
        <div className={s.ProductInfo}>
            <Name name={name} brand={brand}/>
            {attributes?.map((attributesElem) =>{
                return <Attributess id={attributesElem.id} name={attributesElem.name} type={attributesElem.type} items={attributesElem.items}/>
            })}
        </div>
    );
};

export default ProductInfo;