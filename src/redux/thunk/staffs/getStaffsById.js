import { apiGetStaffs } from "../../../utils/apiDepartments";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getStaffsById = createAsyncThunk(
    "getStaffById",
    async (_id, { rejectWithValue, getState, dispatch }) => {
      try {
        console.log("id in get api ", `${apiGetStaffs}/${_id}`)
        const res = await axios.get(`${apiGetStaffs}/${_id}`);
                console.log(res.data)
                console.log("id in get api ",_id)
        return res.data;
      } catch (error) {
        console.log(error);
        return rejectWithValue(error.response.status);
      }
    }
  );