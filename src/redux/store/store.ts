import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {NavBarReducer} from "../NavBar/NavBar";
import {ProductsInfoReducer} from "../MainPage/ProductsInfo";
import {ProductInfoReducer} from "../ProductInfo/ProductInfo";
import {ChosenAttributesReducer} from "../ChosenAttributes/ChosenAttributes";
import {CurrenciesReducer} from "../Price/Price";
import {SelectedOptionReducer} from "../SelectedOption/SelectedOption";
import {CartReducer} from "../Cart/Cart";

const rootReducer = combineReducers({
    NavBarReducer,
    ProductsInfoReducer,
    ProductInfoReducer,
    ChosenAttributesReducer,
    CurrenciesReducer,
    SelectedOptionReducer,
    CartReducer
})

export const setupStore = () =>{
    return configureStore({
         reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
