import { configureStore } from "@reduxjs/toolkit";
import activeSlice from "./reducers/activeSlice";

export const store = configureStore({
  reducer: {
    activeSlice: activeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
