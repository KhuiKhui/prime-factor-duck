import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const slice = createSlice({
  name: "data",
  initialState: {
    number: null,
    clicked: false,
    factors: [],
    dialogue: "",
    dialogueList: [
      "What a trivial question... The answer is blatantly clear.",
      "Are you underestimating me, mortal? Your answer is as follows.",
      "Hmph... This is clear as day.",
      "Waste of my time. Here's the answer, now shoo.",
      "How do you not know this?",
      "You dare stand before ME to ask this elementary question?",
      "Of course I know the answer. Who do you think I am?",
      "Give me a harder one.",
      "Are you kidding me?",
      "Even one of my ducklings can solve this.",
      "With all due respect, can you not waste my gray matter on this?",
      "Go review your math books.",
      "Tsk... That's it?",
      "A challenge, please.",
      "A worthy question.",
      "Hard indeed. Although nothing that I cannot do.",
      "This one was fun.",
      "Very interesting, this one.",
      "You wouldn't have figured this out on your own.",
      "I know I'm great, my duck friends love me too.",
    ],
  },
  reducers: {
    setNumber: (state, action) => {
      state["number"] = action.payload;
    },
    setBool: (state, action) => {
      state["clicked"] = action.payload;
    },
    addFactors: (state, action) => {
      state["factors"].push(action.payload);
    },
    clearFactors: (state, action) => {
      state["factors"] = [];
    },
    popFactors: (state, action) => {
      state["factors"].pop();
    },
    chooseDia: (state, action) => {
      state["dialogue"] =
        state["dialogueList"][
          Math.floor(Math.random() * (state["dialogueList"].length - 1))
        ];
    },
  },
});
const store = configureStore({
  reducer: slice.reducer,
});

export default store;
