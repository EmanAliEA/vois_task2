import { configureStore } from "@reduxjs/toolkit";
// import { postsReducer } from "../features/postsSlice";
import { userReducer } from "../features/userSlice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    user: userReducer,
  },
});
