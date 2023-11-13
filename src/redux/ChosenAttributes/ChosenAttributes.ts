import {createSlice} from "@reduxjs/toolkit";

export type chosenAttribute  = {
    ProductName: string,
    AttributeName:string,
    value: string,
}

interface ChosenAttributes {
    chosenAttributes: chosenAttribute[]
}

const initialState: ChosenAttributes = {
    chosenAttributes: []
};


const ChosenAttributesSlice = createSlice({
    name: 'ChosenAttributes',
    initialState,
    reducers: {
        setChosenAttribues(state, action){
            state.chosenAttributes.push(action.payload)
        },
        removeChosenAttribute(state, action) {
            const { ProductName, AttributeName } = action.payload;
            state.chosenAttributes = state.chosenAttributes.filter(
                (attribute) =>
                    attribute?.ProductName !== ProductName ||
                    attribute?.AttributeName !== AttributeName
            );
        },

    },
});



export const ChosenAttributesActions = ChosenAttributesSlice.actions;
export const ChosenAttributesReducer = ChosenAttributesSlice.reducer;
