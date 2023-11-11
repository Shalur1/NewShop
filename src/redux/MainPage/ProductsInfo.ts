import {createSlice} from '@reduxjs/toolkit';

interface Attribute {
    displayValue: String
    value: String
    id: String
}

interface Price {
    currency: Currency
    amount: Number
}

interface attributes {
    id: String,
    name: String,
    type: String,
    items: [Attribute]
}

interface Currency {
    label: String,
    symbol: String,
}

interface Products {
    id?:String,
    name: String,
    inStock?: Boolean,
    gallery?: [String],
    description?: String,
    category?: String,
    attributes?: attributes
    prices?: Price
    brand?: String,
}

interface ProductsInfoState {
    products: [Products] | []
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
