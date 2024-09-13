import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Products from "../../pages/Products";
import { TLoading } from "../../types/shared";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TProduct } from "../../types/product";

interface IProductsModel {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsModel = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    }); // pending case
    builder.addCase(
      actGetProductsByCatPrefix.fulfilled,
      (state, action: PayloadAction<TProduct>) => {
        state.loading = "succeed";
        state.records = action.payload;
      }
    ); // fulfilled case
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      // set guard to ensure payload is string or null

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export {actGetProductsByCatPrefix};

export default productsSlice.reducer;
