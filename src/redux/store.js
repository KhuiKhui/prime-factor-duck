import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

export const slice = createSlice({
    name: "data",
    initialState: {
        
        number: 0,
        factors: [],
    },
    reducers: {
        increment: (state, action) => {
            state["number"] += action.payload;
        },
        divide: (state, action) => {
            state["number"] /= action.payload;
        },
        setNumber: (state, action) => {
            state["number"] = action.payload;
        },
        addFactors: (state, action) => {
            state["factors"].push(action.payload);
        },
        clearFactors: (state, action) => {
            state["factors"] = [];
        },
        sortFactors: (state, action) => {
            state["factors"].sort();
        }
    }
})
const store = configureStore({
    reducer: slice.reducer
})

export default store