import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from './reducers/useClients'

const rootReducer = combineReducers({
  userReducer
});

export const setupeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupeStore>
export type AppDispatch = AppStore<"dispatch">

