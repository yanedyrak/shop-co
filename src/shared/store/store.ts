import { configureStore } from "@reduxjs/toolkit";
import PhoneDrawer from "./PhoneDrawer";

export const store = configureStore({
  reducer: {
    PhoneDrawer: PhoneDrawer.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
