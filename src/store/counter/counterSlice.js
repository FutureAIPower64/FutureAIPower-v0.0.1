import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mode: JSON.parse(localStorage.getItem('mode')) || false,
}
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMode: (state,action) => {
      localStorage.setItem('mode',action.payload)
      state.mode = action.payload;
    },
    
  },
})

export const { changeMode  } = counterSlice.actions

export default counterSlice.reducer