import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../redux/store/store";
import { bindActionCreators } from '@reduxjs/toolkit';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const actions = {

};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
