import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addNewProduct, deleteProduct, getAllProducts, updateProduct } from "../../api/productApi";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

export const getAllActions = createAsyncThunk(
    "product/getAllActions",
    async (args, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await getAllProducts();
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addNewAction = createAsyncThunk(
    "product/addNewAction",
    async (product, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await addNewProduct(product);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateAction = createAsyncThunk(
    "product/updateAction",
    async ({ product, id }, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await updateProduct(product, id);
            return response.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteAction = createAsyncThunk(
    "product/deleteAction",
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await deleteProduct(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(
                action => action.type.endsWith('/pending'),
                (state) => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = action.payload;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.isLoading = false;
                    state.error = null; // clear any previous error

                    // Handle specific fulfilled cases
                    if (action.type === getAllActions.fulfilled.type) {
                        state.products = action.payload;
                    } else if (action.type === addNewAction.fulfilled.type) {
                        state.products.push(action.payload);
                    } else if (action.type === updateAction.fulfilled.type) {
                        const index = state.products.findIndex(product => product.id === action.payload.id);
                        if (index !== -1) {
                            state.products[index] = action.payload;
                        }
                    } else if (action.type === deleteAction.fulfilled.type) {
                        state.products = state.products.filter(product => product.id !== action.payload);
                    }
                }
            );
    }
});

export const productReducer = productSlice.reducer;
export const productAction = productSlice.actions;
