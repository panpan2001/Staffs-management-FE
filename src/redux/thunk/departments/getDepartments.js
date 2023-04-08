import axios from "axios";
import {apiGetDepartments} from "../../../utils/apiDepartments"
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getDepartments = createAsyncThunk(
    "posts/fetch",
    async (payload, { rejectWithValue, getState, dispatch }) => {
      try {
        console.log('get api')
        const res = await axios.get(apiGetDepartments);
        console.log(res.data)
        return res.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.status);
      }
    }
  );
  