import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  cmyk: "cmyk",
  sunset: "sunset",
};

const getUserFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("user")) || null;

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.cmyk;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initalState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState: initalState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out successfully");
    },
    toggleTheme: (state) => {
      const { sunset, cmyk } = themes;
      state.theme = state.theme === sunset ? cmyk : sunset;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
