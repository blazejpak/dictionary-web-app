import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "activation",
  initialState: {
    active: null,
  },
  reducers: {
    toggleActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { toggleActive } = activeSlice.actions;

export default activeSlice.reducer;
