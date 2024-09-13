import { createSlice } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";





interface ICategoriesState {
    records:{
        id: number;
        title: string;
        prefix: string;
        img: string;
      }[];
    loading: "idle" | "pending" | "succeed" | "failed";
    error:string | null;
};
const initialState: ICategoriesState = {
    records:[],
    loading:"idle",
    error:null
};
const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(actGetCategories.pending,(state)=>{
            state.loading = "pending";
            state.error = null;
        }); // pending case
        builder.addCase(actGetCategories.fulfilled,(state,action)=>{
            state.loading = "succeed";
            state.records.push(action.payload)
        });// fulfilled case
        builder.addCase(actGetCategories.rejected,(state,action)=>{
            state.loading="failed";
            // put guard to ensure payload is string or null
            if(action.payload && typeof action.payload ==="string"){
                state.error = action.payload;

            }
        })
    }
});


export {actGetCategories};
export default categoriesSlice.reducer;