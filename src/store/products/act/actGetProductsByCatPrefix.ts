import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategory } from "../../../types/category";

type TResponse = TCategory[]
const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",async(prefix,thunk)=>{
    const {rejectWithValue} = thunk;

    try{
        const response = await axios.get<TResponse>(`http://localhost:3000/products?cat_prefix=${prefix}`);
        return response.data;
    }catch(error){
        if(axios.isAxiosError(error)){
            return rejectWithValue(error.response?.data.message);
        }else{
            return rejectWithValue("UnExpected Error");
        }
    }
});
export default actGetProductsByCatPrefix;