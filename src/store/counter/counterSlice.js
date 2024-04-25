import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mode: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMode: (state,action) => {
      state.mode = action.payload;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { changeMode  } = counterSlice.actions

export default counterSlice.reducer