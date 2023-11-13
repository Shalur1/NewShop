import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {NavBarReducer} from "../NavBar/NavBar";
import {ProductsInfoReducer} from "../MainPage/ProductsInfo";
import {ProductInfoReducer} from "../ProductInfo/ProductInfo";
import {ChosenAttributesReducer} from "../ChosenAttributes/ChosenAttributes";

const rootReducer = combineReducers({
    NavBarReducer,
    ProductsInfoReducer,
    ProductInfoReducer,
    ChosenAttributesReducer
})

export const setupStore = () =>{
    return configureStore({
         reducer: rootReducer
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
