import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchMain: '',
    searchEpisodes: ''
}

export const stateSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchInMain: (state, action) => {
            const { searchMain } = action.payload;
            state.searchMain = searchMain;
        },
        searchInEpisodes: (state, action) => {
            const { searchEpisodes } = action.payload;
            state.searchEpisodes = searchEpisodes;
        },
    }
});

export const { searchInMain, searchInEpisodes } = stateSlice.actions;
export default stateSlice.reducer;