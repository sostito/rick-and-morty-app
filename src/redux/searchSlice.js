import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: ''
}

export const stateSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        search: (state, action) => {
            const { searchText } = action.payload;
            state.searchText = searchText;
        }
    }
});

export const { search } = stateSlice.actions;
export default stateSlice.reducer;