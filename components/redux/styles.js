import { createSlice } from "@reduxjs/toolkit";
export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    colors: {
      buttonBlue: "#1A7AEC",
      white: "white",
      borderGrey: "#E5E5E5",
      lightGrey: "rgb(246, 246, 246)",
      darkGrey: " #6c6c6c",
    },
    fonts: {},
    icons: {},
  },
  reducers: {},
});
export const {} = styleSlice.actions;

export default styleSlice.reducer;
