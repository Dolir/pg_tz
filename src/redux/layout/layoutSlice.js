import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  modalLogin: false
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleModal: (state, action) => {
      state.modalLogin = action.payload
    }
  }
})

export const { toggleModal } = layoutSlice.actions

export default layoutSlice.reducer
