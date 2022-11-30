import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoPresentOutlined } from "@mui/icons-material";
export const userLogin = createAsyncThunk(
  "user/login",
  async (userdata, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "https://rest.staging.v2f.exchange/api/user/signin",
        userdata,
        config
      );
      // store user's token in local storage

      localStorage.setItem("userToken", data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//   register

export const registerUser = createAsyncThunk(
  "user/register",
  async (userdata, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `${localStorage.getItem("userToken")}`,
        },
      };
      const { data } = await axios.post(
        "https://rest.exchange.staging.v2f.exchange/api/user/addKycDetails",
        userdata,
        config
      );
      // store user's token in local storage

      localStorage.setItem("userToken", data.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const editProfile = createAsyncThunk(
  "user/profile",
  async (userdata, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `${localStorage.getItem("userToken")}`,
        },
      };
      const { data } = await axios.post(
        "https://rest.exchange.staging.v2f.exchange/api/user/editUserProfile",
        userdata,
        config
      );
      // store user's token in local storage

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userProfileAction = createAsyncThunk(
  "user/profile",
  async ({ rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON

      const config = {
        headers: {
          "content-type": "application/json",
          Authorization: `${localStorage.getItem("userToken")}`,
        },
      };
      const response = await axios.get(
        "https://rest.exchange.staging.v2f.exchange/api/user/getUserProfile",

        config
      );
      const data = response.data.message;
      // dispatch(profileData(data))
      // store user's token in local storage
      // localStorage.setItem("userToken", response.token);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


