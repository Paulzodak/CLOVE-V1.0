import { createSlice } from "@reduxjs/toolkit";
export const CategoriesSlice = createSlice({
  name: "categories",
  initialState: {
    currentCategory: "nbb",
  },
  reducers: {
    setCategories: (state, action) => {
      state.currentCategory = action.payload.newCategory;
    },
  },
});
export const { setCategories } = CategoriesSlice.actions;
export default CategoriesSlice.reducer;
