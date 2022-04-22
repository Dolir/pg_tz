import { createSlice } from "@reduxjs/toolkit"
import config from "../../services/auth/jwtDefaultConfig"
import {
  isUserLoggedIn,
  getUserData,
  getAccessToken
} from "../../utils/utility"
const initialState = {
  userData: getUserData(),
  accessToken: getAccessToken(),
  isAuthenticated: isUserLoggedIn()
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userData = action.payload.userData
      state.isAuthenticated = true
      state.accessToken = action.payload.accessToken

      localStorage.setItem("userData", JSON.stringify(action.payload.userData))
      localStorage.setItem(
        config.storageTokenKeyName,
        action.payload.accessToken
      )
    },
    logout: (state) => {
      state.userData = null
      state.isAuthenticated = false
      state.accessToken = null
      localStorage.removeItem("userData")
      localStorage.removeItem(config.storageTokenKeyName)
    }
  }
})

export const { logout, login } = authSlice.actions

export default authSlice.reducer
