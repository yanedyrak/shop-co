import { createSlice } from "@reduxjs/toolkit";

const PhoneDrawer = createSlice({
  name: "PhoneDrawer",
  initialState: {
    open: false,
  },
  reducers: {
    openDrawer(state) {
      state.open = true;
    },
    closeDrawer(state) {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = PhoneDrawer.actions;
export default PhoneDrawer;
