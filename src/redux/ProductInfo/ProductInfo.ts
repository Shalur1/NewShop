import {createSlice} from '@reduxjs/toolkit';
import {Product} from "../../types/types";

interface ProductInfoState {
    productInfo: Product
}

const initialState: ProductInfoState = {
    productInfo: {
        name: " ",
        brand: " "
    }
};

const ProductInfoSlice = createSlice({
    name: 'ProductInfo',
    initialState,
    reducers: {
        setProductInfo(state, action){
            state.productInfo = action.payload.product
        }
    },
});



export const ProductInfoActions = ProductInfoSlice.actions;
export const ProductInfoReducer = ProductInfoSlice.reducer;
