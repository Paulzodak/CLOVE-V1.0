import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    userInput: "",
  },
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload.userInput;
    },
  },
});
export const { setUserInput } = searchSlice.actions;
export default searchSlice.reducer;
