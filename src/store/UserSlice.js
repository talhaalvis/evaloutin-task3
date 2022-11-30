import { createSlice } from '@reduxjs/toolkit'
import {  userLogin, userProfile} from '../store/UserAction'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')

const initialState = {
  loading: false,
  userInfo:null,
  userToken,
  error: null,
  success: false,
  statuss:false,
  userProfile:null

}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProducts(state,action){
      console.log(action.payload, 'hello')
      state.userInfo=action.payload

  },profileData(state,action){
    console.log('form reducer',action.payload)
    state.userProfile=action.payload
}
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
      state.statuss=payload
      state.userLogin=payload
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    }
  //   // register user reducer...
   },
})
// export const {add}=userSlice.actions;
export const {setProducts,profileData}=userSlice.actions;
export default userSlice.reducer
