import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {NavBarActions} from "../redux/NavBar/NavBar";
import {ProductsInfoActions} from "../redux/MainPage/ProductsInfo";
import {ProductInfoActions} from "../redux/ProductInfo/ProductInfo";
import {ChosenAttributesActions} from "../redux/ChosenAttributes/ChosenAttributes";
import {CurrenciesActions} from "../redux/Price/Price";
import {SelectedOptionActions} from "../redux/SelectedOption/SelectedOption";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
    ...NavBarActions,
    ...ProductsInfoActions,
    ...ProductInfoActions,
    ...ChosenAttributesActions,
    ...CurrenciesActions,
    ...SelectedOptionActions
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
