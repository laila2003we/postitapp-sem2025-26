import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../Features/UserSlice"; //import the reducer
import postReducer from "../Features/PostSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { combineReducers } from "redux";

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer in the store
});

const persistConfig = {
  key: "reduxstore", // The key to identify the persisted state in storage
  storage, // The storage method (localStorage)
};
const rootReducer = combineReducers({
  users: usersReducer, // Manage users slice of the state
  posts: postReducer, // Manage posts slice of the state
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistore = persistStore(store); // Create persistore for rehydration
export { store, persistore };
