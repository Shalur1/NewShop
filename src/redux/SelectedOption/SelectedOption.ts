import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    SelectedOption: ""
};

const SelectedOptionSlice = createSlice({
    name: 'SelectedOption',
    initialState,
    reducers: {
        setSelectedOption(state, action){
            state.SelectedOption = action.payload
        }
    },
});



export const SelectedOptionActions = SelectedOptionSlice.actions;
export const SelectedOptionReducer = SelectedOptionSlice.reducer;
