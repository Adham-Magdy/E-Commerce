import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";
import { TLoading } from "../../types/shared";
import { TCategory } from "../../types/category";





interface ICategoriesState {
    records:TCategory[];
    loading: TLoading;
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
        builder.addCase(actGetCategories.fulfilled,(state,action:PayloadAction<TCategory>)=>{
            state.loading = "succeed";
            state.records = action.payload;
        });// fulfilled case
        builder.addCase(actGetCategories.rejected,(state,action)=>{
            state.loading="failed";
            // set guard to ensure payload is string or null
            if(action.payload && typeof action.payload ==="string"){
                state.error = action.payload;

            }
        })
    }
});


export {actGetCategories};
export default categoriesSlice.reducer;