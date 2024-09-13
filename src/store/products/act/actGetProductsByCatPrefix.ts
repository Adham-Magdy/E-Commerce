import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProduct } from "../../../types/product";

type TResponse = TProduct[]
const actGetProductsByCatPrefix = createAsyncThunk("products/actGetProductsByCatPrefix",async(prefix:string,thunk)=>{
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