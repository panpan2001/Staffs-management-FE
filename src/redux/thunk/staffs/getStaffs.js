import axios from "axios";
import {apiGetStaffs} from "../../../utils/apiDepartments"
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getStaffs = createAsyncThunk(
    "/",
    async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
        console.log('get api staffs')
        const res = await axios.get(apiGetStaffs);
        // console.log(res.data)
        return res.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.status);
      }
    }
  );
  