import { configureStore } from "@reduxjs/toolkit";
import countersSlice from "../features/counters/countersSlice";

const store = configureStore({
  reducer: {
    counters: countersSlice,
    posts: countersSlice,
    videos: countersSlice,
    images: countersSlice,
  },
})

export default store