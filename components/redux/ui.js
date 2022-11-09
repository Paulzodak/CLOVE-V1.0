import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    searchMode: false,
  },
  reducers: {
    setSearchMode: (state, action) => {
      state.searchMode = action.payload.searchMode;
    },
  },
});
export const { setSearchMode } = uiSlice.actions;
export default uiSlice.reducer;
