import { createSlice } from "@reduxjs/toolkit";
import { getStaffs } from "../thunk/staffs/getStaffs";
import { getStaffsById } from "../thunk/staffs/getStaffsById";
const initialState={
    staffListInfo:[],
    staffInfo:[],
    loading: false,
    error: ""
}

// create slice

 const staffsSlice= createSlice({
    name: " getStaffs",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getStaffs.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getStaffs.fulfilled,(state,action)=>{
          
            return {...state,
                loading:false,
                staffListInfo:action.payload}
        });
        builder.addCase(getStaffs.rejected,(state,action)=>{
        
           return {...state,error:action.payload}

        });

        // get staff by id
        builder.addCase(getStaffsById.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getStaffsById.fulfilled,(state,action)=>{
          
            return {...state,
                loading:false,
                staffInfo:action.payload}
        });
        builder.addCase(getStaffsById.rejected,(state,action)=>{
        
           return {...state,error:action.payload}

        });
    }
 })

 // generate reducer

 const staffsReducer= staffsSlice.reducer
 

 export default staffsReducer