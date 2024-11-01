import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productsReducer
    }
})