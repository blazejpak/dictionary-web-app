import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    fetchedData: null,
    dataUri: `https://api.dictionaryapi.dev/api/v2/entries/en/`,
    dataError: false,
  },
  reducers: {
    dataFetchedReducer: (state, action) => {
      state.fetchedData = action.payload;
    },
    errorChanger: (state, action) => {
      state.dataError = action.payload;
    },
  },
});

export const { dataFetchedReducer, errorChanger } = dataSlice.actions;

export default dataSlice.reducer;
