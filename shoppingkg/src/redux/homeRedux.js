import { createSlice } from '@reduxjs/toolkit'
import datafake from '../Data/basefekapi.json'

const initialState = {
  categoryopen: false,
  data:datafake,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    categoryopenfun: (state) => {
        if(state.categoryopen){
            state.categoryopen = false
        }else{
            state.categoryopen = true
        }
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { categoryopenfun } = counterSlice.actions

export default counterSlice.reducer