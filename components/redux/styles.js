import { createSlice } from "@reduxjs/toolkit";
export const styleSlice = createSlice({
  name: "styles",
  initialState: {
    colors: {
      buttonBlue: "#1A7AEC",
      white: "white",
      borderGrey: "#E5E5E5",
    },
    fonts: {},
    icons: {},
  },
  reducers: {},
});
export const {} = styleSlice.actions;

export default styleSlice.reducer;
