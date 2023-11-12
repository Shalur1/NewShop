import React, {FC, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../query/query";
import useActions, {useAppSelector} from "../../hooks/redux";
import s from "./Products.module.css"
import ProductTicket from "./ProductTicket/ProductTicket";

const Products: FC = () => {
    const chosenCategory = useAppSelector(state => state.NavBarReducer.chosenCategory);
    const products = useAppSelector(state => state.ProductsInfoReducer.products);
    const {setProducts} = useActions()
    const { data, loading, refetch } = useQuery(GET_PRODUCTS, {
        variables: { title: chosenCategory }
    });

    useEffect(() => {
        refetch()
        if (!loading){
            setProducts(data)
            console.log(data, products)
        }
    }, [chosenCategory, loading]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={s.Products}>
            {products.map((elem) =>{
                return <ProductTicket elem={elem}/>
            })}
        </div>
    );
};

export default Products;
