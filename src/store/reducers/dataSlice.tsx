import { createSlice } from "@reduxjs/toolkit";

export interface Data {
  fetchedData: any;
  dataUri: string;
  dataError: boolean;
}

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    fetchedData: null,
    dataUri: `https://api.dictionaryapi.dev/api/v2/entries/en/`,
    dataError: false,
  } as Data,
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
