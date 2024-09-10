import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import actGetCategories from "./act/actGetCategories";



export type TCategoryModel= {
    id: number;
    title: string;
    prefix: string;
    img: string;
  };

interface ICategoriesState {
    records:TCategoryModel[];
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
        builder.addCase(actGetCategories.fulfilled,(state,action:PayloadAction<TCategoryModel>)=>{
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