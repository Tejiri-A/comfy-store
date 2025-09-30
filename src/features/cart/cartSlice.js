import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
    clearCart: (state) => {
      return null;
    },
    removeItem: (state, action) => {
      return null;
    },
    editItem: (state, action) => {
      return null;
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
