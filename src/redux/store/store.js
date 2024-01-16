import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/Favourite";
import { FetchData } from "../reducers/FetchData";

const rootReducers = combineReducers({
  favourite: favouriteReducer,
  fetchData: FetchData,
});
const store = configureStore({
  reducer: rootReducers,
});

export default store;
