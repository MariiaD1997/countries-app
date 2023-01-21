import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Country } from "../../types/country";

export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
  const jsonData = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,languages,capital"
  );
  const countries = await jsonData.json();
  return countries;
});

const initialState: Country[] = [];
const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState,
  reducers: {
    sortAtoZ: (state) => {
      state.sort((a, b) => (a.name.official > b.name.official ? 1 : -1));
    },
    sortZtoA: (state) => {
      state.sort((a, b) => (b.name.official > a.name.official ? 1 : -1));
    },
  }, //keep all sync methods
  extraReducers: (build) => {
    build.addCase(fetchCountries.fulfilled, (state, action) => {
      return action.payload;
    });
  }, //keep all async methods
});

const countriesReducer = countriesSlice.reducer;
export default countriesReducer;
