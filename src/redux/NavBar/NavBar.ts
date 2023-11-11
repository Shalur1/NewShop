import {createSlice} from '@reduxjs/toolkit';

interface category{
    name: string
}

interface NavBarState {
    categories:[category]
    chosenCategory: String
}

const initialState: NavBarState = {
    categories:[
        {name: "All"}
    ],
    chosenCategory: "all"
};

const NavBarSlice = createSlice({
    name: 'MainPage',
    initialState,
    reducers: {
        setCategories(state, action){
            state.categories = action.payload
        },
        setChosenCategory(state, action){
            state.chosenCategory = action.payload
        }
    },
});

export const NavBarActions = NavBarSlice.actions;
export const NavBarReducer = NavBarSlice.reducer;
