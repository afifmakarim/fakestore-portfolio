import { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "react-power-ups";
import Cookies from "js-cookie";

const local =
  typeof window !== "undefined" && localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: local,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        if (action.payload.quantity) {
          itemExists.quantity = itemExists.quantity + action.payload.quantity;
        } else {
          itemExists.quantity++;
        }
        localStorage.setItem("cartItems", JSON.stringify(state));
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
        });
        localStorage.setItem("cartItems", JSON.stringify(state));
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      item.quantity++;
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
    decrementQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        const index = state.findIndex((item) => item.id === action.payload);
        state.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(state));
      } else {
        item.quantity--;
        localStorage.setItem("cartItems", JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(state));
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
