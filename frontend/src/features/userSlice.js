import { createSlice } from "@reduxjs/toolkit";
import { getLogin } from "../services/checkUser";

const initialState = {
  isLogin: getLogin().isLogin || false,
  user: getLogin(),
  posts: [],
  postsPerPage: [],
  numPage: 1,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // actions
    login(state, action) {
      (state.isLogin = true), (state.user = action.payload);
    },

    getPosts(state, action) {
      state.posts = action.payload;
      state.postsPerPage = action.payload.slice(
        (state.numPage - 1) * 6,
        (state.numPage - 1) * 6 + 6
      );
    },

    addNewPost(state, action) {
      state.posts = [...state.posts, action.payload];
    },
    changePage(state, action) {
      state.numPage = action.payload + 1;
    },
    logout(state) {
      (state.isLogin = false), (state.user = {});
    },
  },
});

export const { login, logout, getPosts, addNewPost, changePage } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
