import {createSlice} from '@reduxjs/toolkit';

interface CartState {
    products: [string?]
}

const initialState: CartState = {
    products: []
};

const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToProducts (state, action){
            state.products.push(action.payload)
        }
    },
});


export const CartActions = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
