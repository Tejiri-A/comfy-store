import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initalState = {
  user: { username: "webmaster" },
  theme: "sunset",
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      console.log("logout");
    },
    toggleTheme: (state) => {
      console.log("toggle theme");
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
