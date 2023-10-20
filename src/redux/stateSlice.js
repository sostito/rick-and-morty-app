import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true
}

export const stateSlice = createSlice({
    name: 'state',
    initialState,
    reducers: {
        changeLoading: (state, action) => {
            const { loading } = action.payload;
            state.loading = loading;
        },
    }
});

export const { changeLoading } = stateSlice.actions;
export default stateSlice.reducer;