import {createSlice} from '@reduxjs/toolkit';

interface CartState {
    products: [string?]
    totalPrice: number
}

const initialState: CartState = {
    products: [],
    totalPrice: 0
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToProducts (state, action){
            state.products.push(action.payload)
        },
        addToTotalPrice (state, action){
            state.totalPrice = state.totalPrice + action.payload
        },
        removeFromTotalPrice (state, action){
            state.totalPrice = state.totalPrice - action.payload
        },
    },
});


export const CartActions = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
