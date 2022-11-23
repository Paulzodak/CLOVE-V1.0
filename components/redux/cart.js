import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCart: (state, action) => {
      //  CHECKS FOR DUPLICATE ORDERS
      if (
        state.cartItems.find((e) => e.name === action.payload.newOrder.name) ===
        undefined
      ) {
        state.cartItems.push(action.payload.newOrder);
      } else {
        console.log("no");
      }
    },
  },
});
export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
