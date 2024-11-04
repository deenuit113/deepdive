import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './categories/categories.slice';
import productsReducer from './products/products.slice';
import productReducer from './products/product.slice';

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productsReducer,
        product: productReducer
    }
})