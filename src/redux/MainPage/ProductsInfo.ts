import {createSlice} from '@reduxjs/toolkit';
import {Product} from "../../types/types";

interface ProductsInfoState {
    products: [Product] | []
}

const initialState: ProductsInfoState = {
    products: []
};

const ProductsInfoSlice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        setProducts(state, action){
            state.products = action.payload.category.products
        }
    },
});



export const ProductsInfoActions = ProductsInfoSlice.actions;
export const ProductsInfoReducer = ProductsInfoSlice.reducer;
