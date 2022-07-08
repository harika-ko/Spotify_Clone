import { configureStore, combineReducers } from "@reduxjs/toolkit";
import likesReducer from "../reducers/likes";
import selectedReducer from "../reducers/selected";

const bigReducer = combineReducers({
    selected: selectedReducer,
    likes: likesReducer,
});

const store = configureStore({
    reducer: bigReducer,
});

export default store;