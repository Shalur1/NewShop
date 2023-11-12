import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import {bindActionCreators} from "@reduxjs/toolkit";
import {NavBarActions} from "../redux/NavBar/NavBar";
import {ProductsInfoActions} from "../redux/MainPage/ProductsInfo";
import {ProductInfoActions} from "../redux/ProductInfo/ProductInfo";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {
    ...NavBarActions,
    ...ProductsInfoActions,
    ...ProductInfoActions,
};

const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};

export default useActions;
