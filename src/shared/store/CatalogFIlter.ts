import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  price: [20, 130],
  color: "",
  size: "",
};
const CatalogFilter = createSlice({
  name: "CatalogFilter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setPrice(state, action: PayloadAction<number[]>) {
      state.price = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    resetFilter(state) {
      state.category = "";
      state.price = [20, 130];
      state.color = "";
      state.size = "";
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
  },
});
export const { setCategory, setPrice, setColor, setSize, resetFilter } =
  CatalogFilter.actions;
export default CatalogFilter;
