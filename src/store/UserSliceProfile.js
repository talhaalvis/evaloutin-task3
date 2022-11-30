import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userProfileAction } from "./UserAction";

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken");

const initialState = {
  loading: false,
  error: null,
  success: false,
  statuss: false,
  userProfile: null,

};

const userSliceProfile = createSlice({
  name: "user",
  initialState,
  reducers: {
    setProducts(state, action) {
      
      state.userInfo = action.payload;
    },
    profileData(state, action) {
      
      state.userProfile = action.payload;
    },
  },
  extraReducers: {
    // login user
    [userProfileAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userProfileAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.statuss = payload;
      state.success=true
      state.userProfile = payload;
    },
    [userProfileAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    //   // register user reducer...
  },
});
// export const {add}=userSlice.actions;
export const { setProducts, profileData } = userSliceProfile.actions;
export default userSliceProfile.reducer;
