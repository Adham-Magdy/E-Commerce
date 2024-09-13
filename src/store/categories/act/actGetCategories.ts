import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "../../../types/category";


const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TCategory>("http://localhost:3000/categories");
      return response.data;
    } catch (error) {
      // in case of axios error
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("Unexpected Error");
      }
    }
  }
);

export default actGetCategories;
