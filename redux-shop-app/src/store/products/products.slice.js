import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// dispatch(fetchProducts("Jewerly"))

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (category, thunkAPI) => {
        try {
            let response;
            if (category) {
                response = await axios.get(
                    `https://fakestoreapi.com/products/category/${category}`
                )
            } else {
                response = await axios.get(
                    "https://fakestoreapi.com/products"
                )
            }

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error loading products");
        }
    }
)


const initialState = {
    products: [],
    isLoading: false,
    error: "",
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export default productsSlice.reducer