import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducers/products/productsSlice';
const rootReducer = combineReducers({ productsReducer });

export const setupStore = () => {
   return configureStore({
      reducer: rootReducer,
   });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
