import React, {useEffect, useState} from 'react';
import {useQuery} from "@apollo/client";
import {GET_PRODUCT_INFO} from "../../query/query";
import {useParams} from "react-router-dom";
import useActions, {useAppSelector} from "../../hooks/redux";
import s from "./ProductPage.module.css"
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductPage = () => {

    const params = useParams()
    const {data, loading} = useQuery(GET_PRODUCT_INFO, {
        variables: {id: params.productID}
    })
    const {setProductInfo} = useActions()
    const productInfo = useAppSelector(state => state.ProductInfoReducer.productInfo);
    const [chosenImageNumber, setChosenImageNumber] = useState(0)

    useEffect(() => {
        if (!loading) {
            console.log(productInfo)
            setProductInfo(data)
        }
    })

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
                    <div className={s.Images}>
                        <div className={s.imgContainer}>
                            {productInfo.gallery.length > 1 &&
                                productInfo.gallery.map((elem, index) => (
                                    <img onClick={() => setChosenImage(index)} src={elem} />
                                ))}
                        </div>
                        <div className={s.MainImageContainer}>
                            <img className={s.MainImage} src={productInfo.gallery[chosenImageNumber]} alt="" />
                        </div>
                    </div>
                )}
            </div>
            <div>
                <ProductInfo name={productInfo.name} brand={productInfo.brand} id={productInfo.id}
                             attributes={productInfo.attributes} prices={productInfo.prices} category={productInfo.category}
                             inStock={productInfo.inStock} description={productInfo.description}/>
            </div>
        </div>
    );
};

export default ProductPage;