import { createSlice } from "@reduxjs/toolkit"

const getInReview = () => {
  return localStorage.getItem("inReview")
    ? JSON.parse(localStorage.getItem("inReview"))
    : []
}
const initialState = {
  newsItems: [],
  newsInReview: getInReview()
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.newsItems = action.payload
    },
    addInReview: (state, action) => {
      state.newsInReview.unshift(action.payload)
      localStorage.setItem("inReview", JSON.stringify(state.newsInReview))
    },
    removeInReview: (state, action) => {
      state.newsInReview = state.newsInReview.filter(
        (news) => news.title !== action.payload.title
      )
      localStorage.setItem("inReview", JSON.stringify(state.newsInReview))
    },
    addOneNews: (state, action) => {
      state.newsItems.unshift(action.payload)
    }
  }
})

export const { addNews, addInReview, addOneNews, removeInReview } =
  newsSlice.actions

export default newsSlice.reducer
