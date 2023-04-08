import { createSlice } from "@reduxjs/toolkit";
import { getStaffsSalaries } from "../thunk/staffsSalaries/getStaffsSalaries";

const initialState={
    staffSalaryInfo:[],
    loading: false,
    error: ""
}

// create slice

 const staffsSalariesSlice= createSlice({
    name: " getStaffs",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getStaffsSalaries.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(getStaffsSalaries.fulfilled,(state,action)=>{
          
            return {...state,
                loading:false,
                staffSalaryInfo:action.payload}
        });
        builder.addCase(getStaffsSalaries.rejected,(state,action)=>{
        
           return {...state,error:action.payload}

        })
    }
 })

 // generate reducer

 const staffsSalariesReducer= staffsSalariesSlice.reducer

 export default staffsSalariesReducer