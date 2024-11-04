import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk(
    'product/fetchProduct',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${id}`
            )
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Error loading product")
        }
    }
)

const initialState = {
    product: {},
    isLoading: false,
    error: "",
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProduct.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.product = payload;
            })
            .addCase(fetchProduct.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })

    }
})

export default productSlice.reducer;