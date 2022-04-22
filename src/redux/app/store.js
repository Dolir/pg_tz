import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../auth/authSlice"
import layoutReducer from "../layout/layoutSlice"
import newsReducer from "../news/newsSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    layout: layoutReducer,
    news: newsReducer
  }
})
