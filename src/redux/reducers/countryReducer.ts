import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";

const initialState: Country[] = [];
const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState,
  reducers: {}, //keep all sync methods
  extraReducers: (build) => {}, //keep all async methods
});

const countriesReducer = countriesSlice.reducer;
export default countriesReducer;
