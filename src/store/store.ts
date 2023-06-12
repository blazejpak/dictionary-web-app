import { configureStore } from "@reduxjs/toolkit";
import activeSlice from "./reducers/activeSlice";
import inputSlice from "./reducers/inputSlice";
import dataSlice from "./reducers/dataSlice";

export const store = configureStore({
  reducer: {
    activeSlice: activeSlice,
    inputSlice: inputSlice,
    dataSlice: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
