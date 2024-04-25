import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  carddata: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment  } = counterSlice.actions

export default counterSlice.reducer