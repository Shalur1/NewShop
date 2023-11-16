import {createSlice} from '@reduxjs/toolkit';
import {Currency} from "../../types/types";

interface CurrenciesState {
    currencies: [Currency]
}

const initialState: CurrenciesState = {
    currencies: [
        {
            label: "USD",
            symbol: "$"
        }
    ]
};

const CurrenciesSlice = createSlice({
    name: 'Price',
    initialState,
    reducers: {
        setCurrencies(state, action){
            state.currencies = action.payload
        }
    },
});


export const CurrenciesActions = CurrenciesSlice.actions;
export const CurrenciesReducer = CurrenciesSlice.reducer;
