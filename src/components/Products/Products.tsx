import React, {FC, useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_CATEGORIES, GET_PRODUCTS} from "../../query/query";
import useActions, {useAppSelector} from "../../hooks/redux";

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
            console.log(data, products)
            setProducts(data)
        }
    }, [chosenCategory]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <p>GG</p>
        </div>
    );
};

export default Products;
