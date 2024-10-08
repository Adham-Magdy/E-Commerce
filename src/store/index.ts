import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlice from './products/productsSlice';

export const store = configureStore({
    reducer:{
        categories:categoriesSlice,
        products: productsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppStore = typeof store;



export default store;