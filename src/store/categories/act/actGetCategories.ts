import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategoryModel } from "../categoriesSlice";

// type of response

const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const url = "http://localhost:5005/categories";
    try {
      const response = await axios.get<TCategoryModel>(url);
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
