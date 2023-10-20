import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './searchSlice'
import stateReducer from './stateSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        loading: stateReducer
    }
})