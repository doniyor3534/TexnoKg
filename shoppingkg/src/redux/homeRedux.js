import { createSlice } from '@reduxjs/toolkit'
import datafake from '../Data/basefekapi.json'
import { toast } from 'react-toastify'

const initialState = {
  categoryopen: false,
  data: datafake,
  likedata: [],
  cartdata: [],
  modalopen: false,
  modalValue:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    categoryopenfun: (state) => {
      if (state.categoryopen) {
        state.categoryopen = false
      } else {
        state.categoryopen = true
      }
    },
    likechange: (state, action) => {
      let s = state.data.find((item) => item.id === action.payload)
      if (s.like === false) {
        state.data = state.data.map((x) => x.id === action.payload ? { ...x, like: true } : x)
        ////////cartdata ga ham bildirish
        state.cartdata = state.cartdata.map((x) => x.id === action.payload ? { ...x, like: true } : x)
        let likefillter = state.data.filter((x) => x.id === action.payload)
        state.likedata.push(likefillter)
        toast.success("Like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
      }else{
        if (state.modalopen) {
          state.modalopen = false
        } else {
          state.modalopen = true
        }
      }
    },
    likechangeReset: (state, action) => {
        state.data = state.data.map((x) => x.id === action.payload ? { ...x, like: false } : x)
        ////////cartdata ga ham bildirish
        state.cartdata =   state.cartdata.map((x) => x.id === action.payload ? { ...x, like: false } : x)
        let likefillter = state.data.filter((x) => x.id === action.payload)
        state.likedata.push(likefillter)
        toast.error("Delete like Success Notification !", {
          position: toast.POSITION.TOP_CENTER
        });
    },
    cartchange: (state, action) => {
      state.data = state.data.map((x) => x.id === action.payload ? { ...x, cart: true } : x)
      let cartfilter = state.data.filter((x) => x.cart===true)
      state.cartdata = cartfilter
      toast.success("Product add Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
    },
    lcartchangeReset: (state, action) => {
      state.data = state.data.map((x) => x.id === action.payload ? { ...x, cart: false } : x)
      let cartfilter = state.data.filter((x) => x.cart===true)
      state.cartdata = cartfilter
      toast.error("Delete product cart  Success Notification !", {
        position: toast.POSITION.TOP_CENTER
      });
  },
    modalchange: (state) => {
      if (state.modalopen) {
        state.modalopen = false
      } else {
        state.modalopen = true
      }
    },
    modalValuereducer: (state,action) => {
      console.log(action.payload);
      state.modalValue = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { categoryopenfun, likechange, modalchange,modalValuereducer,likechangeReset,cartchange,lcartchangeReset} = counterSlice.actions

export default counterSlice.reducer