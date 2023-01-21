import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "./reducers/countryReducer";

const store = configureStore({
  reducer: { countriesReducer },
  //   preloadedState:
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
