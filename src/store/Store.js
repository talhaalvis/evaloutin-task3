import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../store/UserSlice";
import profileReducer from "./UserSliceProfile";
import registerReducer from "./registerUserSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    register:registerReducer,
  },
});
export default store;
