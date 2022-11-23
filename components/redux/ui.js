import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchMode: false,
    showCart: false,
  },
  reducers: {
    setSearchMode: (state, action) => {
      state.searchMode = action.payload.searchMode;
    },
    setShowCart: (state, action) => {
      state.showCart = action.payload.showCart;
      console.log(state.showCart);
    },
  },
});
export const { setSearchMode, setShowCart } = uiSlice.actions;
export default uiSlice.reducer;
