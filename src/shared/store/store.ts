import { configureStore } from "@reduxjs/toolkit";
import PhoneDrawer from "./PhoneDrawer";
import CatalogFilter from "./CatalogFIlter";

export const store = configureStore({
  reducer: {
    PhoneDrawer: PhoneDrawer.reducer,
    CatalogFilter: CatalogFilter.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
