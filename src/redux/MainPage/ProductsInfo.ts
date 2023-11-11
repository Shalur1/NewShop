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

interface ProductsInfoState {
    id?:String,
    name?: String,
    inStock?: Boolean,
    gallery?: [String],
    description?: String,
    category?: String,
    attributes?: attributes
    prices?: Price
    brand?: String,
}

const initialState: ProductsInfoState = {

};

const ProductsInfo = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {

    },
});

export const MainPageSliceActions = ProductsInfo.actions;
export const MainPageSliceReducer = ProductsInfo.reducer;
