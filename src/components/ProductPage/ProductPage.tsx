import React, {useEffect, useState} from 'react';
import {ApolloQueryResult, useQuery} from "@apollo/client";
import {GET_PRODUCT_INFO} from "../../query/query";
import {useParams} from "react-router-dom";
import useActions, {useAppSelector} from "../../hooks/redux";
import s from "./ProductPage.module.css"
import ProductInfo from "./ProductInfo/ProductInfo";
import {Product} from "../../types/types";
import ProductImages from "./ProductImages/ProductImages";

interface ProductData {
    product: Product;
}


const ProductPage = () => {

    const params = useParams()
    const {data, loading, refetch} = useQuery(GET_PRODUCT_INFO, {
        variables: {id: params.productID}
    })
    const {setProductInfo} = useActions()
    const productInfo = useAppSelector(state => state.ProductInfoReducer.productInfo);
    const [chosenImageNumber, setChosenImageNumber] = useState(0)
    useEffect(() => {
        refetch().then((newData: any) => {
            setProductInfo(newData.data)
        })
    }, [])

    const setChosenImage = (number: number) => {
        setChosenImageNumber(number)
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={s.ProductPage}>
            <div>
                {productInfo.gallery && (
                    <ProductImages gallery={productInfo.gallery} />
                )}
            </div>
            <div>
                <ProductInfo
                    prices = {productInfo.prices}
                    name={productInfo.name} brand={productInfo.brand} id={productInfo.id}
                             attributes={productInfo.attributes}
                             category={productInfo.category}
                             inStock={productInfo.inStock} description={productInfo.description}/>
            </div>
        </div>
    );
};

export default ProductPage;