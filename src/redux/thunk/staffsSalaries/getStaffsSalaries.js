import axios from "axios";
import {apiGetStaffsSalaries} from "../../../utils/apiDepartments"
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getStaffsSalaries = createAsyncThunk(
    "/",
    async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
        console.log('get api staffs')
        const res = await axios.get(apiGetStaffsSalaries);
        console.log(res.data)
        return res.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.status);
      }
    }
  );
  