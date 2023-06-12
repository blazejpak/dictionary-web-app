import { createSlice } from "@reduxjs/toolkit";

export const inputSlice = createSlice({
  name: "inputChanger",
  initialState: {
    inputText: "",
    inputSubmit: false,
  },
  reducers: {
    textChanger: (state, action) => {
      state.inputText = action.payload;
    },
    toggleSubmit: (state) => {
      state.inputSubmit = !state.inputSubmit;
    },
  },
});

export const { textChanger, toggleSubmit } = inputSlice.actions;

export default inputSlice.reducer;
