import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

export const slice = createSlice({
    name: "data",
    initialState: {
        
        number: null,
        clicked: false,
        factors: [],
        dialogue: "",
        dialogueList: [
            "What a trivial question... It is clear that:",
            "Are you underestimating me, mortal? Your answer is as follows:",
            "Hmph... This is clear as day:",
            "Waste of my time. Here's the answer, now shoo:",
            "How do you not know this?",
            "You dare stand before ME to ask this elementary question?",
            "Of course I know the answer. Who do you think I am?",
            "Give me a harder one.",
            "Are you kidding me?",
            "Even one of my ducklings can solve this.",
            
        ],
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
        setBool: (state, action) => {
            state["clicked"] = !state["clicked"];
        },
        addFactors: (state, action) => {
            state["factors"].push(action.payload);
        },
        clearFactors: (state, action) => {
            state["factors"] = [];
        },
        sortFactors: (state, action) => {
            state["factors"].sort();
        },
        chooseDia: (state, action) => {
            state["dialogue"] = state["dialogueList"][Math.floor(Math.random() * (state["dialogueList"].length - 1))];
        },
    }
})
const store = configureStore({
    reducer: slice.reducer
})

export default store