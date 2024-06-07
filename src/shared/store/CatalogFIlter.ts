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
    resetFilter(state) {
      state = initialState;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setPrice(state, action: PayloadAction<number[]>) {
      state.price = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.size = action.payload;
    },
  },
});
export const { setCategory, setPrice, setColor, setSize, resetFilter } =
  CatalogFilter.actions;
export default CatalogFilter;
