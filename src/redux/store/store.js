import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/Favourite";

const store = configureStore({
  reducer: favouriteReducer,
});

export default store;
