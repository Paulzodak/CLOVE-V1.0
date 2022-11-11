import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.cartItems.push(action.payload.newOrder);
    },
  },
});
export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
