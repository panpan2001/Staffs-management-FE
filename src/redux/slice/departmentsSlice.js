import {  createSlice } from "@reduxjs/toolkit"
import { getDepartments } from "../thunk/departments/getDepartments"
// create initial state
const initialState={
    departmentInfo:[],
    loading: false,
    error: ""
}

//create async thunk in thunk/department/detDepartments
 

// create slice 
const departmentsSlice=createSlice({
    name:'getDepartments',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getDepartments.pending,(state,action)=>{
            state.loading= true
        });
        builder.addCase(getDepartments.fulfilled,(state,action)=>{
            // state.departmentInfo=action.payload;
            // state.loading= false;
            // console.log('2')
            return {...state,
                loading:false,
                departmentInfo:action.payload}
        });
        builder.addCase(getDepartments.rejected,(state,action)=>{
            // state.departmentInfo=[]
            // state.loading=false;
            // state.error= action.payload
           return {...state,error:action.payload}

        })
        
    }
  
})


const departmentsReducer= departmentsSlice.reducer;

export default departmentsReducer
