import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosIns from "../../api";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axiosIns.post(`/api/auth/login`, {
        email,
        password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const { data } = await axiosIns.post(`/api/auth/register`, {
        name,
        email,
        password,
      });
      localStorage.setItem('userInfo', JSON.stringify(data));
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
